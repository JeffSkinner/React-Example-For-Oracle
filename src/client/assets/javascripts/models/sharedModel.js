// This is the model of our module state
type LevelByValue = {
  label: string,
  value: number
};

export type State = {
  skill: string,
  extras: boolean,
  extrasEnabled: boolean,
  level: number,
  levelSelection: Array<LevelByValue>
};

