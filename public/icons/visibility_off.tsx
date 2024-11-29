import { SVGProps } from 'react';
interface IcCheckProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}
function VisibilityOff({ width = 24, height = 24 }: IcCheckProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7726 12.9729L14.6496 11.8499C14.8201 10.9601 14.5861 10.2012 13.9477 9.57296C13.3092 8.94476 12.5432 8.70374 11.6496 8.84989L10.5265 7.72684C10.7586 7.61914 10.9974 7.54157 11.2429 7.49414C11.4884 7.44671 11.7406 7.42299 11.9996 7.42299C13.1342 7.42299 14.0973 7.81882 14.889 8.61049C15.6807 9.40216 16.0765 10.3653 16.0765 11.4999C16.0765 11.7589 16.0544 12.0111 16.0101 12.2566C15.9659 12.5021 15.8867 12.7409 15.7726 12.9729ZM18.9534 16.0845L17.8496 15.0499C18.4829 14.5666 19.0496 14.0291 19.5496 13.4374C20.0496 12.8457 20.4663 12.1999 20.7996 11.4999C19.9663 9.81656 18.7621 8.47906 17.1871 7.48739C15.6121 6.49572 13.8829 5.99989 11.9996 5.99989C11.5163 5.99989 11.0454 6.03322 10.5871 6.09989C10.1288 6.16656 9.66625 6.26656 9.19959 6.39989L8.03424 5.23454C8.67012 4.98326 9.31851 4.798 9.97941 4.67877C10.6403 4.55953 11.3137 4.49991 11.9996 4.49991C14.1483 4.49991 16.122 5.05825 17.9207 6.17491C19.7194 7.29158 21.1028 8.80247 22.0707 10.7076C22.1374 10.8345 22.1858 10.9624 22.2159 11.0912C22.246 11.2201 22.2611 11.3563 22.2611 11.4999C22.2611 11.6435 22.2486 11.7797 22.2236 11.9085C22.1986 12.0374 22.1528 12.1653 22.0861 12.2922C21.7322 13.0448 21.288 13.7396 20.7534 14.3768C20.2188 15.014 19.6188 15.5832 18.9534 16.0845ZM11.9996 18.4999C9.89447 18.4999 7.96499 17.9374 6.21116 16.8124C4.45731 15.6874 3.06308 14.2056 2.02846 12.3672C1.94513 12.2403 1.88424 12.1025 1.84579 11.9537C1.80732 11.805 1.78809 11.6537 1.78809 11.4999C1.78809 11.346 1.80475 11.1973 1.83809 11.0537C1.87142 10.9102 1.92975 10.7698 2.01309 10.6326C2.38489 9.95311 2.80604 9.30599 3.27656 8.69124C3.74708 8.07649 4.2881 7.52553 4.89964 7.03837L2.64194 4.76526C2.50347 4.61655 2.4352 4.43995 2.43714 4.23546C2.43905 4.03098 2.51244 3.85631 2.65731 3.71144C2.80218 3.56657 2.97782 3.49414 3.18424 3.49414C3.39064 3.49414 3.56627 3.56657 3.71114 3.71144L20.288 20.2883C20.4265 20.4268 20.4999 20.5983 20.5082 20.8027C20.5165 21.0072 20.4432 21.187 20.288 21.3422C20.1432 21.487 19.9675 21.5595 19.7611 21.5595C19.5547 21.5595 19.3791 21.487 19.2342 21.3422L15.715 17.8537C15.1252 18.0819 14.5191 18.2467 13.8967 18.3479C13.2743 18.4492 12.6419 18.4999 11.9996 18.4999ZM5.95346 8.09216C5.36756 8.54473 4.84095 9.0566 4.37364 9.62777C3.90632 10.1989 3.51497 10.823 3.19959 11.4999C4.03292 13.1832 5.23709 14.5207 6.81209 15.5124C8.38709 16.5041 10.1163 16.9999 11.9996 16.9999C12.4291 16.9999 12.8519 16.971 13.2679 16.9133C13.6839 16.8557 14.0971 16.7666 14.5073 16.646L13.2419 15.3499C13.0393 15.4383 12.8371 15.4982 12.6352 15.5297C12.4332 15.5611 12.2214 15.5768 11.9996 15.5768C10.865 15.5768 9.90185 15.181 9.11019 14.3893C8.31852 13.5976 7.92269 12.6345 7.92269 11.4999C7.92269 11.2781 7.93999 11.0662 7.97461 10.8643C8.00923 10.6624 8.06756 10.4601 8.14961 10.2576L5.95346 8.09216Z"
        fill="#111827"
      />
    </svg>
  );
}
export default VisibilityOff;