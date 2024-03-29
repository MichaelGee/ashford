import React from 'react';
import {Loader2} from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-[999] flex items-center justify-center">
      <Loader2 className="animate-spin w-8 h-8" />
    </div>
  );
};

export default Loader;
