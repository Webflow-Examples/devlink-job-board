type IXData = any;

type IXEngine = {
  init: (data: IXData) => void;
};

export const createIX2Engine: () => IXEngine;
