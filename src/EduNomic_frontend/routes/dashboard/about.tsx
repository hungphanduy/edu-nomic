import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';
import { Stats } from 'declarations/EduNomic_backend_dao/EduNomic_backend_dao.did';
import { useEffect, useState } from 'react';
import { EduNomic_backend_dao } from 'declarations/EduNomic_backend_dao';

export default function AboutPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const stats = await EduNomic_backend_dao.getStats();
      setStats(stats);
    }
    fetchStats();
  }, []);

  return (
    <Box>
      <Center>
        <Card maxW={'2xl'}>
          <CardBody>
            <Text mb={5}>{stats?.manifesto}</Text>
            <Box>
              <Text
                display={'flex'}
                align={'center'}
                justifyContent={'space-between'}
              >
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Members
                </span>{' '}
                {stats?.numberOfMembers.toString()}
              </Text>
            </Box>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}
