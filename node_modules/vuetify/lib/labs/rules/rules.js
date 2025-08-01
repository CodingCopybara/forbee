// Utilities
import { computed, inject, toRef } from 'vue';

// Types

export function createRules(options, locale) {
  const {
    t
  } = locale;
  const aliases = {
    required: err => {
      return v => {
        // If the modifier .number is used, the 0 will be a number and it's a falsy value so we need to check for it
        return v === 0 || !!v || t(err || '$vuetify.rules.required');
      };
    },
    email: err => {
      return v => !v || typeof v === 'string' && /^.+@\S+\.\S+$/.test(v) || t(err || '$vuetify.rules.email');
    },
    number: err => {
      return v => !!Number(v) || t(err || '$vuetify.rules.number');
    },
    integer: err => {
      return v => /^[\d]*$/.test(v) || t(err || '$vuetify.rules.integer');
    },
    capital: err => {
      return v => /^[A-Z]*$/.test(v) || t(err || '$vuetify.rules.capital');
    },
    maxLength: (len, err) => {
      return v => !v || v.length <= len || t(err || '$vuetify.rules.maxLength', [len]);
    },
    minLength: (len, err) => {
      return v => !v || v.length >= len || t(err || '$vuetify.rules.minLength', [len]);
    },
    strictLength: (len, err) => {
      return v => !v || v.length === len || t(err || '$vuetify.rules.strictLength', [len]);
    },
    exclude: (forbiddenCharacters, err) => {
      return v => {
        let error = true;
        for (const character of forbiddenCharacters) {
          if (v.includes(character)) error = err || t('$vuetify.rules.exclude', character);
        }
        return error;
      };
    },
    notEmpty: err => {
      return v => v && v.length > 0 || t(err || '$vuetify.rules.notEmpty');
    },
    pattern: (pattern, err) => {
      return v => !v || pattern.test(v) || t(err || '$vuetify.rules.pattern');
    },
    ...options?.aliases
  };
  function resolveRules(fn) {
    return computed(() => fn().map(rule => {
      let ruleName = null;
      let ruleParams = [undefined];
      if (Array.isArray(rule)) {
        ruleName = rule[0];
        ruleParams = rule.slice(1);
      } else if (typeof rule === 'string') {
        ruleName = rule;
      }
      if (ruleName !== null) {
        if (ruleName.startsWith('$')) {
          ruleName = ruleName.slice(1);
        }
        return aliases[ruleName]?.(...ruleParams);
      } else {
        return rule;
      }
    }));
  }
  return resolveRules;
}
export const RulesSymbol = Symbol.for('vuetify:rules');
export function useRules(fn) {
  const resolveRules = inject(RulesSymbol, null);
  if (!resolveRules) return toRef(fn);
  return resolveRules(fn);
}
//# sourceMappingURL=rules.js.map