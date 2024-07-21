import { PrimeAPIOptions } from "@powell/api";

export type ThemeName =
    "arya-blue" |
    "arya-green" |
    "arya-orange" |
    "arya-purple" |
    "bootstrap4-dark-blue" |
    "bootstrap4-dark-purple" |
    "bootstrap4-light-blue" |
    "bootstrap4-light-purple" |
    "fluent-light" |
    "lara-dark-amber" |
    "lara-dark-blue" |
    "lara-dark-cyan" |
    "lara-dark-green" |
    "lara-dark-indigo" |
    "lara-dark-pink" |
    "lara-dark-purple" |
    "lara-dark-teal" |
    "lara-light-amber" |
    "lara-light-blue" |
    "lara-light-cyan" |
    "lara-light-green" |
    "lara-light-indigo" |
    "lara-light-pink" |
    "lara-light-purple" |
    "lara-light-teal" |
    "luna-amber" |
    "luna-blue" |
    "luna-green" |
    "luna-pink" |
    "md-dark-deeppurple" |
    "md-dark-indigo" |
    "md-light-deeppurple" |
    "md-light-indigo" |
    "mdc-dark-deeppurple" |
    "mdc-dark-indigo" |
    "mdc-light-deeppurple" |
    "mdc-light-indigo" |
    "mira" |
    "nano" |
    "nova" |
    "nova-accent" |
    "nova-alt" |
    "rhea" |
    "saga-blue" |
    "saga-green" |
    "saga-orange" |
    "saga-purple" |
    "soho-dark" |
    "soho-light" |
    "tailwind-light" |
    "vela-blue" |
    "vela-green" |
    "vela-orange" |
    "vela-purple" |
    "viva-dark" |
    "viva-light";

export interface PowellConfig extends PrimeAPIOptions {
  theme?: ThemeName;
  rtl?: boolean;
  showRequiredStar?: boolean;
  formVariant?: PrimeInputTextProps["variant"];
}
