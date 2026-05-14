export declare function createIX3Engine(): Promise<{
  register: (interactions: unknown[], timelines: unknown[]) => void;
  destroy: () => void;
}>;
