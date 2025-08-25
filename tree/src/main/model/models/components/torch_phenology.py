import torch
import torch.nn as nn
import torch.nn.functional as F

class DegreeDaysDNN(nn.Module):

    def __init__(self,
                 num_out_channels: int = 1,
                 hidden_size: int = 64,
                 num_daily_measurements: int = 24,
                 ):
        super().__init__()
        assert num_out_channels > 0

        self._num_out_channels = num_out_channels

        self._conv_1 = nn.Conv2d(in_channels=1,
                                 out_channels=hidden_size,
                                 kernel_size=(1, num_daily_measurements),
                                 )

        self._conv_2 = nn.Conv2d(in_channels=1,
                                 out_channels=hidden_size,
                                 kernel_size=(1, hidden_size),
                                 )

        self._conv_3 = nn.Conv2d(in_channels=1,
                                 out_channels=num_out_channels,
                                 kernel_size=(1, hidden_size),
                                 )

    def forward(self, xs: dict):

        xs = xs['temperature']

        # xs has shape (batch_size, season length, num daily temperature measurements)

        # Add channel dimension (for compatibility with the nn.Conv2d object)
        xs = xs.unsqueeze(1)  # shape: (batch_size, 1, season length, num daily temperature measurements)

        xs = self._conv_1(xs)  # shape: (batch_size, channels, season length, 1)
        xs = F.relu(xs)
        xs = torch.swapdims(xs, 1, 3)

        # xs = self._dropout(xs)  # TODO -- remove

        xs = self._conv_2(xs)  # shape: (batch_size, channels, season length, 1)
        xs = F.relu(xs)
        xs = torch.swapdims(xs, 1, 3)

        units = self._conv_3(xs)  # shape: (batch_size, num_out_channels, season length, 1)

        # Remove the final dimension
        units = units.squeeze(-1)  # shape: (batch_size, num_out_channels, seq_length)

        # Apply final activation
        units = F.sigmoid(units)

        if self._num_out_channels == 1:
            units = units.squeeze(dim=1)  # Remove channel dimension

        return units