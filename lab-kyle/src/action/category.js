import uuid from 'uuid/v4';

export const create = ({name,budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid(),
    created: Date.now(), 
    name,
    budget,
  },
});

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});


export const destroy = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
