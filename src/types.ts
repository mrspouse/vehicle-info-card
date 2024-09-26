// Cutom card helpers:
import { ActionConfig, LovelaceCardConfig, Themes, HomeAssistant, Theme } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';

export interface ModeSpecificTheme {
  light: Partial<Theme>;
  dark: Partial<Theme>;
}

export interface ExtendedTheme extends Theme {
  modes?: ModeSpecificTheme;
}

export interface ExtendedThemes extends Themes {
  darkMode: boolean;
  themes: {
    [key: string]: ExtendedTheme;
  };
}

/**
 * HomeAssistantExtended extends the existing HomeAssistant interface with additional properties.
 */

export type HomeAssistantExtended = HomeAssistant & {
  themes: ExtendedThemes;
  formatEntityState: (stateObj: HassEntity) => string;
  formatAttributeName: (entityId: string, attribute: string) => string;
  formatEntityAttributeValue: (entityId: HassEntity, attribute: string) => string;
};
/**
 * Configuration interface for the Vehicle Card.
 */

export interface Services {
  auxheat: boolean;
  charge: boolean;
  doorsLock: boolean;
  engine: boolean;
  preheat: boolean;
  sendRoute: boolean;
  sigPos: boolean;
  sunroof: boolean;
  windows: boolean;
}

export interface VehicleImage {
  url: string;
  title: string;
}

export interface VehicleImagesList extends VehicleCardConfig {
  images: VehicleImage[];
}

export interface ThemesConfig {
  theme: string;
  mode: 'auto' | 'dark' | 'light';
}

export interface MapPopupConfig {
  hours_to_show: number;
  default_zoom: number;
  theme_mode: 'dark' | 'light' | 'auto';
}

export interface ButtonGridConfig extends VehicleCardConfig {
  button_grid: {
    use_swiper: boolean;
    rows_size: number;
  };
}

export type ButtonConfigItem = {
  enabled: boolean;
  hide?: boolean;
  primary: string;
  secondary: string;
  icon: string;
  notify: string;
  button_type: 'default' | 'action';
  button_action: ButtonActionConfig;
  entity: string;
  attribute: string;
};

export type ExtendedButtonConfigItem = ButtonConfigItem & {
  isDefaultCard?: boolean;
  isHidden?: boolean;
  useCustomButton?: boolean;
};

export type CustomButtonEntity = {
  enabled: boolean;
  hide: boolean;
  primary: string;
  secondary: string;
  icon: string;
  notify: boolean;
  button_type: 'default' | 'action';
  button_action: ButtonActionConfig;
  entity: string;
  attribute: string;
};

export interface AddedCustomButtonCard {
  [key: string]: {
    button: ButtonConfigItem;
    cards: LovelaceCardConfig[];
  };
}

export interface AddedCards extends VehicleCardConfig {
  added_cards: AddedCustomButtonCard[];
}

export interface UseCustomCards {
  vehicle_card: boolean;
  trip_card: boolean;
  eco_card: boolean;
  tyre_card: boolean;
}

export interface CustomCards extends VehicleCardConfig {
  vehicle_card?: LovelaceCardConfig[];
  trip_card?: LovelaceCardConfig[];
  eco_card?: LovelaceCardConfig[];
  tyre_card?: LovelaceCardConfig[];
}

export interface CustomButtonsConfig extends VehicleCardConfig {
  eco_button?: ButtonConfigItem;
  trip_button?: ButtonConfigItem;
  vehicle_button?: ButtonConfigItem;
  tyre_button?: ButtonConfigItem;
}

export interface ExtraConfigs {
  tire_background: string;
}
export interface ButtonActionConfig {
  entity: string;
  tap_action: ActionConfig;
  hold_action: ActionConfig;
  double_tap_action: ActionConfig;
}

export interface VehicleCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  device_tracker?: string;
  google_api_key?: string;
  selected_language?: string | null;
  model_name: string;
  map_popup_config: MapPopupConfig;
  selected_theme: ThemesConfig;
  use_custom_cards?: UseCustomCards;
  services: Services;
  extra_configs: ExtraConfigs;
}

export interface ShowOptions extends VehicleCardConfig {
  show_slides: boolean;
  show_map: boolean;
  show_buttons: boolean;
  show_background: boolean;
  enable_map_popup: boolean;
  enable_services_control: boolean;
  show_error_notify: boolean;
}

export interface VehicleEntities {
  [key: string]: VehicleEntity;
}

export type VehicleEntity = {
  entity_id: string;
  original_name: string;
  device_id?: string;
  unique_id?: string;
  translation_key?: string;
  disabled_by?: string | null;
  hidden_by?: string | null;
};

export type EntityConfig = {
  key: string;
  name?: string;
  icon?: string;
  unit?: string;
  state?: string;
  active?: boolean;
};

export interface EcoData {
  bonusRange: number;
  acceleration: number;
  constant: number;
  freeWheel: number;
}
export interface ServiceItem {
  [key: string]: {
    name: string;
    icon: string;
  };
}

export type CardTypeConfig = {
  type: string;
  name: string;
  icon: string;
  config: string;
  button: string;
};

export interface CustomButton {
  notify: boolean;
  state: string;
}
export type ButtonCardEntity = {
  key: string;
  default_name?: string;
  default_icon?: string;
  button: {
    button_action: ButtonActionConfig;
    icon: string;
    primary: string;
    secondary: string;
    attribute: string;
    entity: string;
    notify: string;
    hidden: boolean;
  };
  button_type: 'default' | 'action';
  card_type: 'default' | 'custom';
  custom_card: LovelaceCardConfig[];
  custom_button: boolean;
};
