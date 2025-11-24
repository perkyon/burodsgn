import svgPaths from "../imports/svg-l6kis4xgb8";

export function Video() {
  return (
    <section id="video" className="bg-white w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay className="w-full h-full object-cover" controlsList="nodownload" loop muted playsInline>
          <source src="/_videos/v1/5788a094f7935db1fc691268e739009db3aa42b1" />
        </video>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        <div className="w-full max-w-[874px]">
          <svg className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 874 470">
            <g>
              <path clipRule="evenodd" d={svgPaths.p2943e980} fill="white" fillOpacity="0.63" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p22670400} fill="white" fillOpacity="0.63" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35d9ba80} fill="white" fillOpacity="0.63" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1a900900} fill="white" fillOpacity="0.63" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}