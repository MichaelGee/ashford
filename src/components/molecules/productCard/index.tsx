import {Button} from '@/components/ui/button';
import {ellipsize} from '@/lib/utils';
import {ArrowRight} from 'lucide-react';
import Box from 'ui-box';
import {useNavigate} from 'react-router-dom';

const ProductCard = ({tag}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-[8px] max-w-[10rem] min-h-[9.8rem] relative">
      <div className="relative">
        <Box
          position="absolute"
          background="linear-gradient(180deg, rgba(11, 23, 44, 0) 59.17%, rgba(11, 23, 44, 0.9) 99.06%)"
          zIndex="1"
          height="100%"
          width="100%"
          top="0"
          left="0"
        />
        <img src="https://rb.gy/8ywh5w" className="rounded-t-[8px] relative" />
        <p className="text-white text-[0.5rem] absolute bottom-[2px] z-[1] ml-[0.6rem]">
          {tag}
        </p>
      </div>

      <div className="p-[0.5rem]">
        <p className="text-[0.6rem] mb-2 text-primary">
          {ellipsize(
            'Our expedited air cargo service ensures rapid and reliable transportation of goods.',
            65
          )}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => navigate('/quote')}
        >
          Get quote{' '}
          <div className="ml-1">
            <ArrowRight width={15} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
