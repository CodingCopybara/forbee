
import data.bloom_doy
import data.regions


"""
    Pre-configured named location groups on which the models can be run
    Defines a mapping from
        group_name -> list of location tokens in group
"""

LOCATION_GROUPS = {
    'all': data.bloom_doy.get_locations(),
    'japan': data.bloom_doy.get_locations_japan(),
    'switzerland': data.bloom_doy.get_locations_switzerland(),
    'south_korea': data.bloom_doy.get_locations_south_korea(),
    'usa': data.bloom_doy.get_locations_usa(),
    'japan_south_korea': data.bloom_doy.get_locations_japan() + data.bloom_doy.get_locations_south_korea(),
    'japan_switzerland': data.bloom_doy.get_locations_japan() + data.bloom_doy.get_locations_switzerland(),
    'no_us': data.bloom_doy.get_locations_japan() + data.bloom_doy.get_locations_switzerland() + data.bloom_doy.get_locations_south_korea(),

    'japan_hokkaido': list(data.regions.LOCATIONS_HOKKAIDO.keys()),
    'japan_tohoku': list(data.regions.LOCATIONS_TOHOKU.keys()),
    'japan_hokuriku': list(data.regions.LOCATIONS_HOKURIKU.keys()),
    'japan_kanto_koshin': list(data.regions.LOCATIONS_KANTO_KOSHIN.keys()),
    'japan_kinki': list(data.regions.LOCATIONS_KINKI.keys()),
    'japan_chugoku': list(data.regions.LOCATIONS_CHUGOKU.keys()),
    'japan_tokai': list(data.regions.LOCATIONS_TOKAI.keys()),
    'japan_shikoku': list(data.regions.LOCATIONS_SHIKOKU.keys()),
    'japan_kyushu_north': list(data.regions.LOCATIONS_KYUSHU_NORTH.keys()),
    'japan_kyushu_south_amami': list(data.regions.LOCATIONS_KYUSHU_SOUTH_AMAMI.keys()),
    'japan_okinawa': list(data.regions.LOCATIONS_OKINAWA.keys()),

    'japan_wo_okinawa': list(data.regions.LOCATIONS_WO_OKINAWA.keys()),

    'japan_known_variety': list(data.regions.LOCATION_VARIETY_JAPAN.keys()),  # Locations in Japan for which the variety is known
    'japan_yedoensis': list(data.regions.LOCATIONS_JAPAN_YEDOENSIS.keys()),
    'japan_sargentii': list(data.regions.LOCATIONS_JAPAN_SARGENTII.keys()),

    'japan_yedoensis_sargentii': list(data.regions.LOCATIONS_JAPAN_YEDOENSIS.keys()) + list(data.regions.LOCATIONS_JAPAN_SARGENTII.keys()),

    'japan_yedoenis_south_korea': list(data.regions.LOCATIONS_JAPAN_YEDOENSIS.keys()) + list(data.regions.LOCATION_VARIETY_SOUTH_KOREA.keys()),

    'japan_tokyo': ['Japan/Tokyo'],
    'japan_kyoto': ['Japan/Kyoto-1'],

    'south_korea_wo_juji': data.regions.LOCATIONS_SOUTH_KOREA_WO_JUJI,

    'japan_switzerland_known_variety': list(data.regions.LOCATION_VARIETY_JAPAN.keys()) + data.bloom_doy.get_locations_switzerland(),

    # All selected locations to be included in comparing the process-based models with the learned chill model
    # Includes:
    #   - Japan (only locations with yedoensis and sargentii cultivars)
    #   - Switzerland
    #   - South Korea
    'selection': list(data.regions.LOCATIONS_JAPAN_YEDOENSIS.keys()) + list(data.regions.LOCATIONS_JAPAN_SARGENTII.keys()) + data.bloom_doy.get_locations_switzerland() + data.bloom_doy.get_locations_south_korea(),

    # User-added flower groups
        'korean_forsythia': ['South Korea/고산', 'South Korea/금산', 'South Korea/백령도', 'South Korea/북강릉', 'South Korea/속초', 'South Korea/성산포', 'South Korea/춘천', 'South Korea/영천', 'South Korea/무안', 'South Korea/산청', 'South Korea/대구', 'South Korea/군산', 'South Korea/순천', 'South Korea/임실', 'South Korea/태백', 'South Korea/서울', 'South Korea/해남', 'South Korea/고창군', 'South Korea/안동', 'South Korea/창원', 'South Korea/고흥', 'South Korea/철원', 'South Korea/영덕', 'South Korea/영주', 'South Korea/서귀포', 'South Korea/보은', 'South Korea/북춘천', 'South Korea/성산', 'South Korea/광주', 'South Korea/울산', 'South Korea/문경', 'South Korea/동두천', 'South Korea/천안', 'South Korea/이천', 'South Korea/장수', 'South Korea/제천', 'South Korea/통영', 'South Korea/구미', 'South Korea/거제', 'South Korea/울릉도', 'South Korea/동해', 'South Korea/영월', 'South Korea/거창', 'South Korea/추풍령', 'South Korea/대관령', 'South Korea/수원', 'South Korea/부안', 'South Korea/포항', 'South Korea/삼척', 'South Korea/고창', 'South Korea/상주', 'South Korea/서산', 'South Korea/진도(첨찰산)', 'South Korea/제주', 'South Korea/북창원', 'South Korea/홍성', 'South Korea/합천', 'South Korea/주암', 'South Korea/의성', 'South Korea/전주', 'South Korea/밀양', 'South Korea/부산', 'South Korea/진주', 'South Korea/봉화', 'South Korea/충주', 'South Korea/홍천', 'South Korea/강화', 'South Korea/정읍', 'South Korea/부여', 'South Korea/보령', 'South Korea/ 인천', 'South Korea/대구(기)', 'South Korea/목포', 'South Korea/장흥', 'South Korea/인제', 'South Korea/흑산도', 'South Korea/강릉', 'South Korea/파주', 'South Korea/남해', 'South Korea/ 완도', 'South Korea/남원', 'South Korea/양평', 'South Korea/원주', 'South Korea/울진', 'South Korea/청주', 'South Korea/여수', 'South Korea/대전'],
    'korean_plum_blossom': ['South Korea/충주', 'South Korea/통영', 'South Korea/전주', 'South Korea/포항', 'South Korea/여수', 'South Korea/파주', 'South Korea/북춘천', 'South Korea/창원', 'South Korea/대관령', 'South Korea/서귀포', 'South Korea/합천', 'South Korea/원주', 'South Korea/고산', 'South Korea/거창', 'South Korea/강화', 'South Korea/광주', 'South Korea/부여', 'South Korea/속초', 'South Korea/보령', 'South Korea/인제', 'South Korea/군산', 'South Korea/북창원', 'South Korea/해남', 'South Korea/봉화', 'South Korea/남해', 'South Korea/상주', 'South Korea/제천', 'South Korea/부산', 'South Korea/임실', 'South Korea/무안', 'South Korea/울산', 'South Korea/장수', 'South Korea/울진', 'South Korea/진주', 'South Korea/남원', 'South Korea/이천', 'South Korea/성산', 'South Korea/북강릉', 'South Korea/영덕', 'South Korea/금산', 'South Korea/흑산도', 'South Korea/고창군', 'South Korea/추풍 령', 'South Korea/영천', 'South Korea/대전', 'South Korea/거제', 'South Korea/천안', 'South Korea/순천', 'South Korea/산청', 'South Korea/부안', 'South Korea/목포', 'South Korea/춘천', 'South Korea/ 주암', 'South Korea/양평', 'South Korea/수원', 'South Korea/인천', 'South Korea/성산포', 'South Korea/백령도', 'South Korea/영주', 'South Korea/문경', 'South Korea/고창', 'South Korea/구 미', 'South Korea/청주', 'South Korea/안동', 'South Korea/태백', 'South Korea/고흥', 'South Korea/홍성', 'South Korea/홍천', 'South Korea/서산', 'South Korea/보은', 'South Korea/동두천', 'South Korea/밀양', 'South Korea/진도(첨찰산)', 'South Korea/완도', 'South Korea/삼척', 'South Korea/장흥', 'South Korea/제주', 'South Korea/대구(기)', 'South Korea/정읍', 'South Korea/강릉', 'South Korea/대구', 'South Korea/의성', 'South Korea/동해', 'South Korea/영월', 'South Korea/서울', 'South Korea/울릉도'],
    'korean_cherry_blossom': ['South Korea/의성', 'South Korea/흑산도', 'South Korea/남해', 'South Korea/대구', 'South Korea/산청', 'South Korea/충주', 'South Korea/포항', 'South Korea/거창', 'South Korea/성산', 'South Korea/수원', 'South Korea/인제', 'South Korea/보령', 'South Korea/무안', 'South Korea/영천', 'South Korea/추풍령', 'South Korea/홍천', 'South Korea/대관령', 'South Korea/강릉', 'South Korea/원주', 'South Korea/진주', 'South Korea/군산', 'South Korea/목포', 'South Korea/동두천', 'South Korea/철원', 'South Korea/대구(기)', 'South Korea/북강릉', 'South Korea/전주', 'South Korea/강화', 'South Korea/광주', 'South Korea/금산', 'South Korea/홍성', 'South Korea/영월', 'South Korea/임실', 'South Korea/상주', 'South Korea/천안', 'South Korea/정읍', 'South Korea/춘천', 'South Korea/고흥', 'South Korea/울산', 'South Korea/거제', 'South Korea/보은', 'South Korea/백령도', 'South Korea/삼 척', 'South Korea/양평', 'South Korea/태백', 'South Korea/이천', 'South Korea/청주', 'South Korea/장흥', 'South Korea/부안', 'South Korea/성산포', 'South Korea/북창원', 'South Korea/완도', 'South Korea/부산', 'South Korea/해남', 'South Korea/북춘천', 'South Korea/문경', 'South Korea/서산', 'South Korea/인천', 'South Korea/동해', 'South Korea/순천', 'South Korea/안동', 'South Korea/속초', 'South Korea/장수', 'South Korea/고산', 'South Korea/서울', 'South Korea/봉화', 'South Korea/구미', 'South Korea/고창', 'South Korea/창원', 'South Korea/파주', 'South Korea/여수', 'South Korea/ 대전', 'South Korea/제주', 'South Korea/밀양', 'South Korea/울릉도', 'South Korea/영덕', 'South Korea/고창군', 'South Korea/서귀포', 'South Korea/부여', 'South Korea/울진', 'South Korea/ 합천', 'South Korea/남원', 'South Korea/통영', 'South Korea/영주', 'South Korea/제천', 'South Korea/진도(첨찰산)', 'South Korea/주암'],
    'korean_acacia': ['South Korea/서귀포', 'South Korea/부산', 'South Korea/고흥', 'South Korea/해남', 'South Korea/홍성', 'South Korea/울진', 'South Korea/대구(기)', 'South Korea/의성', 'South Korea/흑산도', 'South Korea/서산', 'South Korea/밀양', 'South Korea/창원', 'South Korea/대관령', 'South Korea/속초', 'South Korea/광주', 'South Korea/봉화', 'South Korea/수원', 'South Korea/홍천', 'South Korea/합천', 'South Korea/산청', 'South Korea/거제', 'South Korea/파주', 'South Korea/성산', 'South Korea/천 안', 'South Korea/인제', 'South Korea/울릉도', 'South Korea/이천', 'South Korea/영천', 'South Korea/고산', 'South Korea/철원', 'South Korea/포항', 'South Korea/대전', 'South Korea/장흥', 'South Korea/울산', 'South Korea/구미', 'South Korea/영덕', 'South Korea/삼척', 'South Korea/장수', 'South Korea/남해', 'South Korea/보은', 'South Korea/춘천', 'South Korea/백령도', 'South Korea/문경', 'South Korea/동두천', 'South Korea/진주', 'South Korea/통영', 'South Korea/서울', 'South Korea/완도', 'South Korea/부여', 'South Korea/추풍령', 'South Korea/군산', 'South Korea/북춘천', 'South Korea/고창군', 'South Korea/상주', 'South Korea/고창', 'South Korea/부안', 'South Korea/보령', 'South Korea/거창', 'South Korea/강화', 'South Korea/무안', 'South Korea/영주', 'South Korea/안동', 'South Korea/성산포', 'South Korea/영월', 'South Korea/북강릉', 'South Korea/인천', 'South Korea/임실', 'South Korea/대구', 'South Korea/청주', 'South Korea/주암', 'South Korea/원주', 'South Korea/제천', 'South Korea/충주', 'South Korea/남원', 'South Korea/동해', 'South Korea/목포', 'South Korea/여수', 'South Korea/북창원', 'South Korea/정읍', 'South Korea/순천', 'South Korea/금산', 'South Korea/양평', 'South Korea/태백', 'South Korea/제주', 'South Korea/진도(첨찰산)', 'South Korea/전주', 'South Korea/강릉'],
    'korean_azalea': ['South Korea/순천', 'South Korea/강릉', 'South Korea/안동', 'South Korea/제주', 'South Korea/대관령', 'South Korea/통영', 'South Korea/고창', 'South Korea/영덕', 'South Korea/거제', 'South Korea/성산', 'South Korea/해남', 'South Korea/의성', 'South Korea/청주', 'South Korea/서산', 'South Korea/고산', 'South Korea/장수', 'South Korea/상주', 'South Korea/울진', 'South Korea/양평', 'South Korea/백령도', 'South Korea/울릉도', 'South Korea/보령', 'South Korea/파주', 'South Korea/속초', 'South Korea/여수', 'South Korea/춘천', 'South Korea/수원', 'South Korea/남원', 'South Korea/무안', 'South Korea/대구', 'South Korea/울산', 'South Korea/동해', 'South Korea/흑산도', 'South Korea/이천', 'South Korea/봉화', 'South Korea/장흥', 'South Korea/군산', 'South Korea/진주', 'South Korea/밀양', 'South Korea/추풍령', 'South Korea/부산', 'South Korea/진도(첨찰산)', 'South Korea/ 인제', 'South Korea/천안', 'South Korea/강화', 'South Korea/영주', 'South Korea/홍천', 'South Korea/부안', 'South Korea/철원', 'South Korea/원주', 'South Korea/완도', 'South Korea/합천', 'South Korea/인천', 'South Korea/주암', 'South Korea/고흥', 'South Korea/거창', 'South Korea/산청', 'South Korea/포항', 'South Korea/부여', 'South Korea/목포', 'South Korea/동두천', 'South Korea/서귀포', 'South Korea/남해', 'South Korea/대구(기)', 'South Korea/정읍', 'South Korea/홍성', 'South Korea/영천', 'South Korea/고창군', 'South Korea/창원', 'South Korea/금산', 'South Korea/북 창원', 'South Korea/삼척', 'South Korea/서울', 'South Korea/문경', 'South Korea/태백', 'South Korea/전주', 'South Korea/성산포', 'South Korea/영월', 'South Korea/광주', 'South Korea/제천', 'South Korea/구미', 'South Korea/북강릉', 'South Korea/임실', 'South Korea/북춘천', 'South Korea/충주', 'South Korea/보은', 'South Korea/대전'],
    'korean_cosmos': ['South Korea/대구', 'South Korea/제주', 'South Korea/해남', 'South Korea/청주', 'South Korea/무안', 'South Korea/광주', 'South Korea/남원', 'South Korea/영덕', 'South Korea/이천', 'South Korea/강화', 'South Korea/산청', 'South Korea/부여', 'South Korea/천안', 'South Korea/거제', 'South Korea/흑산도', 'South Korea/안동', 'South Korea/거창', 'South Korea/파주', 'South Korea/동두천', 'South Korea/보령', 'South Korea/밀양', 'South Korea/고흥', 'South Korea/고산', 'South Korea/문경', 'South Korea/ 북춘천', 'South Korea/동해', 'South Korea/금산', 'South Korea/백령도', 'South Korea/구미', 'South Korea/양평', 'South Korea/영월', 'South Korea/진도(첨찰산)', 'South Korea/인 제', 'South Korea/영주', 'South Korea/영천', 'South Korea/성산포', 'South Korea/임실', 'South Korea/의성', 'South Korea/진주', 'South Korea/속초', 'South Korea/서귀포', 'South Korea/순천', 'South Korea/장수', 'South Korea/고창', 'South Korea/부안', 'South Korea/고창군', 'South Korea/울릉도', 'South Korea/홍천', 'South Korea/주암', 'South Korea/봉화', 'South Korea/북강릉', 'South Korea/북창원', 'South Korea/태백', 'South Korea/울진', 'South Korea/철원', 'South Korea/수원', 'South Korea/목포', 'South Korea/창원', 'South Korea/군산', 'South Korea/정읍', 'South Korea/울 산', 'South Korea/추풍령', 'South Korea/성산', 'South Korea/충주', 'South Korea/원주', 'South Korea/삼척', 'South Korea/장흥', 'South Korea/부산', 'South Korea/제천', 'South Korea/서산', 'South Korea/보은', 'South Korea/대관령', 'South Korea/인천', 'South Korea/강릉', 'South Korea/합천', 'South Korea/통영', 'South Korea/여수', 'South Korea/전주', 'South Korea/상주', 'South Korea/춘천', 'South Korea/포항', 'South Korea/홍성', 'South Korea/서울', 'South Korea/완도', 'South Korea/남해', 'South Korea/대전'],
}
