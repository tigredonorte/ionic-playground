/**
 * Interface for objects that represents a user.
 *
 * @interface
 */
export interface User {
  name: string;
  token: string;
  picture: string;
  created_at: string;
  email: string;
  email_verified: boolean;
  first_time: boolean;
  user_id: string;
  app_metadata?: any;
  data?: any;
}

export const getEmptyUser = (): User => ({
  'name': '',
  'token': '',
  'picture': '',
  'created_at': '',
  'email': '',
  'email_verified': false,
  'first_time': false,
  'user_id': '',
  'app_metadata': {},
  'data': {}
});


export const mapUser = (trade) => ({});

const removeCircularStructure = data => {
  if (data['user_metadata'] && data['user_metadata']['data']) {
    if (data['user_metadata']['data']['user_metadata']) {
      delete data['user_metadata']['data']['user_metadata'];
    }
  }
  return data;
};

export const getUserData = data => {
  data = removeCircularStructure(data);
  const userMetadata = data['user_metadata'];
  return {
    name: (userMetadata && userMetadata['name']) ? userMetadata['name'] : data['name'],
    token: data['token'],
    picture: data['picture'],
    created_at: data['created_at'],
    email: data['email'],
    email_verified: data['email_verified'] ? data['email_verified'] : null,
    first_time: data['first_time'] ? data['first_time'] : null,
    user_id: data['user_id'] ? data['user_id'] : null,
    app_metadata: data['app_metadata'] ? data['app_metadata'] : null,
    data: (data['user_metadata'] || data['data']),
  };
};
