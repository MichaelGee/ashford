import {Button} from '@/components/ui/button';
import {ellipsize} from '@/lib/utils';
import {ArrowRight, Clock4, EyeIcon} from 'lucide-react';
import Box from 'ui-box';
import {useNavigate} from 'react-router-dom';

const ProductCard = ({tag, status, image, description}) => {
  const dataToPass = {
    tag,
    status,
    image,
    description,
  };
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
        <img src={image} className="rounded-t-[8px] relative h-[5.625rem] w-full object-cover " />
        <p className="text-white text-[0.5rem] absolute bottom-[2px] z-[1] ml-[0.6rem]">
          {tag}
        </p>
      </div>

      <div className="p-[0.5rem]">
        <p className="text-[0.6rem] mb-2 text-primary">
          {ellipsize(description, 65)}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full hover:bg-[#1E427D] hover:text-white "
          onClick={() => {
            if (status === 'quote') navigate('/quote');
            if (status === 'success')
              navigate('/view-quote', {state: dataToPass});
          }}
        >
          {status === 'success' && (
            <>
              Veiw quote
              <div className="ml-1">
                <EyeIcon width={15} />
              </div>
            </>
          )}
          {status === 'requested' && (
            <>
              Requested
              <div className="ml-1">
                <Clock4 width={15} />
              </div>
            </>
          )}
          {status === 'quote' && (
            <>
              Get quote
              <div className="ml-1">
                <ArrowRight width={15} />
              </div>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
