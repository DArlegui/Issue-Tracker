import { issues_status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: issues_status;
  }[] = [
    { label: 'Open', value: open, status: 'OPEN' },
    { label: 'In-progress Issues', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed Issues', value: closed, status: 'CLOSED' },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link className="text-sm font-medium" href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
          </Flex>
          <Text size="5" className="font-bold">
            {container.value}
          </Text>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
