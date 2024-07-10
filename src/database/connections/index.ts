import { logger } from '@/common/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
prisma
  .$connect()
  .then(() => {
    logger.info('database connected');
  })
  .catch(() => {
    logger.error('database not connected');
  });

prisma.$disconnect().then(() => {
  logger.info('database disconnected');
});

export { prisma };
