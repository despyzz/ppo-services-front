export interface MainPageStats {
  projectsCount: number;
  paymentsCount: number;
  choiceCount: number;
}

export interface MainPageStatsResponse {
  success: boolean;
  stats: MainPageStats;
}
