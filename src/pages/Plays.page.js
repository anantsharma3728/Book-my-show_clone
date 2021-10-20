import React from "react";
import Poster from "../components/Poster/PlaysPoster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component.js";
import {ImLocation2} from "react-icons/im";
import {BsFunnel} from "react-icons/bs";

const Plays = () => {
  return(
    <>
    <div className="container mx-auto px-4">
       <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-8/12">
    <h2 class="text-2xl font-bold mb-4">Plays in Nanded</h2>
    <button className="border border-gray-300 rounded-full text-red-600 text-sm px-2 py-1 mt-4 mb-8 bg-plays-50">Theatre</button>
    <div className="flex flex-wrap">
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
        title="Dum Biryani-15th Oct"
        subtitle="English ₹199"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4 ">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-ensntwdbtt-portrait.jpg"
        title="Digital Theater Festival Pass (Access to 2 Plays) "
        subtitle="Engilsh/Hindi ₹350"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315137-rnmgfrzrhw-portrait.jpg"
        title="The Body-8th Oct"
        subtitle="English ₹199"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315139-jhkpmzkrns-portrait.jpg"
        title="The Body-10th Oct"
        subtitle="English ₹199"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
        title="Dum Biryani-17th Oct"
        subtitle="English ₹199"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315138-buhlgjqpmm-portrait.jpg"
        title="The Body-9th Oct"
        subtitle="English ₹199"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315135-brnnxkrltp-portrait.jpg"
        title="Digital Theater Festival Pass (Access to 2 Plays)"
        subtitle="English/Hindi ₹350"
      />
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <Poster
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-qsqjqnhkha-portrait.jpg"
        title="Digital Theater Fest By EnActe,Rage"
        subtitle="English/Hindi ₹199 onwards"
      />
      </div>
    </div>
    </div>

    <div className="hidden lg:block lg:w-1/4 mr-8">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="">
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/></div>
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/></div>
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="Categories" tags={["Theatre"]}/></div>
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="Genres" tags={["Drama", "Comedy", "Musical", "Mythological"]}/></div>
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="More Filters" tags={["Online Streaming", "Outdoor Events", "Kids Allowed"]}/></div>
        <div className="bg-gray-50 px-2 py-2 shadow-md mb-4"><PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]}/></div>
        </div>
        <button className="w-full p-1 mt-2 text-sm rounded-sm cursor-pointer border border-red-600 text-red-600">Browse by Venus</button>
       </div>


      <div className="flex items-center justify-between mt-8 md:hidden">
        <div className="flex items-center text-md text-plays-50 shadow-md rounded-full bg-red-600 p-2 gap-3 mt-2 cursor-pointer">
          <ImLocation2 />
          <button>Browse by Venus</button>
        </div>
        <div className="text-plays-50 rounded-full shadow-md p-3 bg-red-600"><BsFunnel /></div>
      </div>
    </div>
    </div>
    </>
  )
};

export default Plays;
