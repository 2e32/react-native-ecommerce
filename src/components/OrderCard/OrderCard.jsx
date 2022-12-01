import Card from './Card';
import { HeaderContent, BodyContent } from './content';

export default function OrderCard({ order }) {
  return (
    <Card
      headerContent={<HeaderContent number={order?.number} date={order?.date} />}
      bodyContent={
        <BodyContent quantity={order?.quantity} total={order?.total} status={order?.status} />
      }
    />
  );
}
