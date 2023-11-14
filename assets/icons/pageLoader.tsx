import { SVGProps } from "react";

export function PageLoader(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
        <animate
          id="svgSpinnersBarsScale0"
          attributeName="y"
          begin="0;svgSpinnersBarsScale1.end-0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="0;svgSpinnersBarsScale1.end-0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="12;22;12"
        ></animate>
      </rect>
      <rect width="2.8" height="12" x="5.8" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScale0.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScale0.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="12;22;12"
        ></animate>
      </rect>
      <rect width="2.8" height="12" x="10.6" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScale0.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScale0.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="12;22;12"
        ></animate>
      </rect>
      <rect width="2.8" height="12" x="15.4" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScale0.begin+0.3s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScale0.begin+0.3s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="12;22;12"
        ></animate>
      </rect>
      <rect width="2.8" height="12" x="20.2" y="6" fill="currentColor">
        <animate
          id="svgSpinnersBarsScale1"
          attributeName="y"
          begin="svgSpinnersBarsScale0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScale0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          values="12;22;12"
        ></animate>
      </rect>
    </svg>
  );
}
