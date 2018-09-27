interface IRouteMatch {
  params: {
    [param: string]: string;
  };
  isExact: boolean;
  path: string;
  url: string;
}

interface IRouteLocation {
  key?: string;
  pathname: string;
  search: string;
  hash: string;
  state: any;
}

type HistoryAction = 'PUSH' | 'REPLACE' | 'POP';

type BlockFunction = (location: IRouteLocation, action: HistoryAction) => string;
type BlockPrompt = string | BlockFunction;

interface IRouteHistory {
  length: number;
  action: HistoryAction;
  location: IRouteLocation;
  push: (path: string, state?: any) => void;
  replace: (path: string, state?: any) => void;
  go: (n: number) => void;
  goBack: () => void;
  goForward: () => void;
  block: (prompt: BlockPrompt) => void;
}

interface IRouteComponentProps {
  match: IRouteMatch;
  location: IRouteLocation;
  history: IRouteHistory;
}
