
interface User {
  username: string;
  role: 'admin' | 'user';
}

export const mockUsers = {
  admin: { username: 'admin', password: 'admin', role: 'admin' as const },
  user: { username: 'user', password: 'user', role: 'user' as const },
};

export const mockLogin = (username: string, password: string): User | null => {
  const user = Object.values(mockUsers).find(
    (u) => u.username === username && u.password === password
  );
  
  if (user) {
    return { username: user.username, role: user.role };
  }
  
  return null;
};
