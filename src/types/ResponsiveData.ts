export interface Screen {
  id: string;
  value: boolean;
};

export interface Screens {
  equalOrLessThan: Screen[];
  equalOrGreaterThan: Screen[];
}

export interface ResponsiveType {
  viewportWidth: number;
  screens: Screens;
};
