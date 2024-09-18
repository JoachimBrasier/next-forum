import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { prisma } from '@/lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
  },
});
