export interface IChartProps {
  data: IHourlyList[];
}

interface IHourlyList {
  time: string;
  temp: number;
}
