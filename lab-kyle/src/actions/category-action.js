export const category_create = category => {
  return {
    type: 'CATEGORY_CREATE',
    category
  }
}

export const category_update = (content) => {
  return {
    type: 'CATEGORY_UPDATE',
    category: content
  }
}

export const category_delete = id => {
  return {
    type: 'CATEGORY_DELETE',
    category: id
  }
}

export const category_toggle = id => {
  return {
    type: 'CATEGORY_TOGGLE',
    category: id
  }
}
