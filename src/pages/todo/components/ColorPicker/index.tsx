import React from "react";

export const ColorPicker = ({ value, onChange }) => {
  return (
    <div
      className="rounded-3xl h-[32px] brightness-90 relative"
      style={{ backgroundColor: value }}
    >
      <input
        className="opacity-0 cursor-pointer"
        type="color"
        value={value}
        onChange={onChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[20px] w-[20px] absolute top-[7px] left-[15px] text-inherit invert z-[-1]"
        viewBox="0 0 512 512"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M468.277,116.662c-27.603-40.846-66.66-73.285-112.616-92.728C325.024,10.979,291.31,3.813,256.007,3.813   s-68.914,7.166-99.422,20.135c-30.507,12.969-57.911,31.72-80.944,54.876C29.582,125.109,0.966,189.104,0.013,259.601v0.013   C0.007,260.484,0,261.355,0,262.21c0,18.834,2.795,34.961,7.865,48.553c5.056,13.586,12.441,24.609,21.286,32.858   c5.892,5.508,12.407,9.77,19.176,12.811c9.037,4.056,18.491,5.946,27.657,5.946c8.187,0,16.148-1.493,23.486-4.385   c7.33-2.897,14.065-7.2,19.587-12.921c14.64-15.181,35.707-24.334,59.042-24.341c17.402,0.007,33.44,5.262,46.826,14.298   c13.374,9.03,24.019,21.854,30.363,36.865c4.234,10.016,6.577,20.998,6.577,32.603c0.007,4.679-0.754,9.551-1.966,14.894   c-1.192,5.33-2.843,11.071-4.282,17.415c-1.35,5.988-2.014,11.722-2.014,17.196c-0.027,10.125,2.371,19.388,6.694,27.061   c4.302,7.694,10.407,13.654,17.073,17.868c4.446,2.822,9.153,4.905,13.914,6.384c6.351,1.96,12.797,2.864,19.052,2.871   c5.858-0.007,11.565-0.788,16.977-2.46c52.951-16.387,99.058-48.594,132.011-91.364c32.946-42.75,52.691-96.215,52.677-154.558   C512.014,206.841,495.873,157.507,468.277,116.662z M126.462,251.147c-20.998,0-38.024-17.032-38.024-38.023   c0-21.006,17.025-38.03,38.024-38.03c21.005,0,38.03,17.024,38.03,38.03C164.492,234.115,147.467,251.147,126.462,251.147z    M193.245,166.434c-18.264,0-33.077-14.812-33.077-33.083c0-18.265,14.812-33.077,33.077-33.077   c18.272,0,33.083,14.812,33.083,33.077C226.328,151.622,211.517,166.434,193.245,166.434z M288.782,149.738   c-16.388,0-29.679-13.291-29.679-29.678s13.291-29.678,29.679-29.678c16.387,0,29.678,13.29,29.678,29.678   S305.17,149.738,288.782,149.738z M361.744,137.53c14.6,0,26.431,11.831,26.431,26.43c0,14.593-11.831,26.431-26.431,26.431   c-14.599,0-26.43-11.838-26.43-26.431C335.314,149.361,347.146,137.53,361.744,137.53z M409.085,359.556   c-3.062,7.221-8.153,13.339-14.552,17.676c-6.406,4.33-14.196,6.871-22.485,6.871c-5.522,0-10.831-1.13-15.641-3.165   c-7.221-3.055-13.346-8.146-17.676-14.551c-4.337-6.406-6.878-14.188-6.872-22.478c0-5.522,1.123-10.831,3.158-15.647   c3.062-7.215,8.146-13.339,14.552-17.669c6.406-4.344,14.195-6.879,22.478-6.872c5.529,0,10.838,1.124,15.648,3.158   c7.221,3.056,13.346,8.153,17.675,14.552c4.337,6.406,6.879,14.196,6.872,22.478C412.243,349.43,411.12,354.747,409.085,359.556z    M397.61,254.503c-11.414,0-20.676-9.249-20.676-20.67s9.262-20.67,20.676-20.67c11.42,0,20.676,9.249,20.676,20.67   S409.03,254.503,397.61,254.503z"
        />
      </svg>
    </div>
  );
};
