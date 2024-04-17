import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

import IconButton from "~/components/buttons/icon-button";
import { MainLayoutMenu, MainMenu } from "~/components/main-menu";
import { NavBar } from "~/components/navbar";
import NavbarOsmoPrice from "~/components/navbar-osmo-price";
import NavbarOsmosisUpdates from "~/components/navbar-osmosis-update";
import { useCurrentLanguage, useWindowSize } from "~/hooks";

export const MainLayout: FunctionComponent<{
  menus: MainLayoutMenu[];
  secondaryMenuItems: MainLayoutMenu[];
}> = observer(({ children, menus, secondaryMenuItems }) => {
  const router = useRouter();
  useCurrentLanguage();

  const { height, isMobile } = useWindowSize();

  const smallVerticalScreen = height < 850;

  const showFixedLogo = !smallVerticalScreen && !isMobile;
  const showBlockLogo = smallVerticalScreen && !isMobile;

  const selectedMenuItem = menus.find(
    ({ selectionTest }) => selectionTest?.test(router.pathname) ?? false
  );

  return (
    <React.Fragment>
      {showFixedLogo && (
        <div className="fixed z-50 w-sidebar px-5 pt-6">
          <OsmosisFullLogo onClick={() => router.push("/")} />
        </div>
      )}
      <div className="fixed inset-y-0 z-40 flex w-sidebar flex-col overflow-y-auto overflow-x-hidden bg-osmoverse-900 px-2 py-6 md:hidden">
        {showBlockLogo && (
          <div className="z-50 mx-auto ml-3 w-sidebar grow-0">
            <OsmosisFullLogo onClick={() => router.push("/")} />
          </div>
        )}
        <MainMenu
          className={classNames(showBlockLogo && "!mt-8")}
          menus={menus}
          secondaryMenuItems={secondaryMenuItems}
        />
        <div className="flex flex-1 flex-col justify-end gap-5">
          <div className="px-2">
            <NavbarOsmosisUpdates />
          </div>
          <NavbarOsmoPrice />
        </div>
      </div>
      <NavBar
        className="ml-sidebar md:ml-0"
        title={selectedMenuItem?.label ?? ""}
        menus={menus}
        secondaryMenuItems={secondaryMenuItems}
      />
      <div className="ml-sidebar h-content bg-osmoverse-900 md:ml-0 md:h-content-mobile">
        {children}
      </div>
    </React.Fragment>
  );
});

const OsmosisFullLogo: FunctionComponent<{
  width?: number;
  height?: number;
  onClick?: () => void;
}> = ({ width = 175, height = 48, onClick }) => (
  <IconButton
    className="cursor-pointer"
    mode="unstyled"
    aria-label="osmosis logo"
    style={{
      width,
      height,
    }}
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    /** We cannot add this to the sprite.svg since nested <defs></defs> are not supported  */
    icon={
      <svg
        width="175"
        height="48"
        viewBox="0 0 175 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3347_16138)">
          <path
            d="M28 8C19.1634 8 12 15.1634 12 24C12 32.8366 19.1634 40 28 40C36.8366 40 44 32.8366 44 24C44 15.1634 36.8366 8 28 8Z"
            fill="url(#paint0_linear_3347_16138)"
          />
          <mask
            id="mask0_3347_16138"
            maskUnits="userSpaceOnUse"
            x="13"
            y="9"
            width="30"
            height="30"
          >
            <path
              d="M13.9062 24C13.9062 16.2154 20.2169 9.90479 28.0015 9.90479C35.7861 9.90479 42.0967 16.2154 42.0967 24C42.0967 31.7846 35.7861 38.0953 28.0015 38.0953C20.2169 38.0953 13.9062 31.7846 13.9062 24Z"
              fill="url(#paint1_linear_3347_16138)"
            />
          </mask>
          <g mask="url(#mask0_3347_16138)">
            <path
              d="M28.0731 38.0217C35.9793 38.0217 42.2982 30.9683 42.2982 22.8726C40.3099 24.6235 33.8921 26.9526 26.8917 21.1453C19.765 15.2331 13.7628 17.7595 13.7628 22.4312C13.7628 22.4312 13.7578 23.1025 13.7578 23.3632C13.7578 31.4588 20.167 38.0217 28.0731 38.0217Z"
              fill="url(#paint2_radial_3347_16138)"
            />
            <path
              d="M31.8612 23.7321C34.5179 24.1789 36.4997 24.005 38.1449 22.8125C39.6181 21.7447 41.8364 20.7842 42.0573 22.953C42.4305 26.618 35.1383 29.6942 28.8545 29.9316C22.5707 30.169 13.3141 25.9533 14.5165 19.9616C14.6535 19.2794 14.9869 18.592 15.8219 17.5816C16.7027 16.5157 19.6533 14.7908 22.3905 15.9013C26.72 17.2361 27.0631 22.9251 31.8612 23.7321Z"
              fill="url(#paint3_radial_3347_16138)"
            />
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.3472 20.4439C25.8102 19.6847 26.8097 18.1559 26.8097 16.3938C26.8097 13.8752 24.768 11.8335 22.2495 11.8335C21.2409 11.8335 20.3088 12.1609 19.5537 12.7152L19.4942 12.6227C8.53862 20.1632 14.695 33.5397 19.6575 36.2056C20.5325 36.4085 20.2805 35.5885 19.8433 34.1652C18.8787 31.0258 17.0122 24.9512 24.3472 20.4439Z"
              fill="url(#paint4_linear_3347_16138)"
            />
            <path
              d="M28.6864 38.1882C36.5926 38.1882 42.9115 31.1348 42.9115 23.0391C40.9232 24.79 34.5054 27.1191 27.505 21.3118C20.3783 15.3996 14.376 17.926 14.376 22.5977C14.376 22.5977 14.3711 23.269 14.3711 23.5297C14.3711 31.6253 20.7803 38.1882 28.6864 38.1882Z"
              fill="url(#paint5_radial_3347_16138)"
            />
            <path
              d="M32.4744 23.8986C35.1311 24.3454 37.113 24.1715 38.7582 22.979C40.2314 21.9112 42.4497 20.9507 42.6706 23.1195C43.0438 26.7845 35.7516 29.8607 29.4678 30.0981C23.184 30.3355 13.9274 26.1198 15.1298 20.1281C15.2667 19.4459 15.6002 18.7585 16.4351 17.7481C17.316 16.6822 20.2666 14.9573 23.0038 16.0678C27.3333 17.4026 27.6764 23.0916 32.4744 23.8986Z"
              fill="url(#paint6_radial_3347_16138)"
            />
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.9605 20.6104C26.4235 19.8512 27.423 18.3224 27.423 16.5603C27.423 14.0417 25.3813 12 22.8627 12C21.8542 12 20.9221 12.3274 20.167 12.8817L20.1074 12.7892C9.1519 20.3297 15.3082 33.7062 20.2708 36.3721C21.1458 36.5751 20.8938 35.755 20.4566 34.3317C19.4919 31.1923 17.6255 25.1178 24.9605 20.6104Z"
              fill="url(#paint7_linear_3347_16138)"
            />
          </g>
        </g>
        <path
          d="M61.4779 32.168C59.9099 32.168 58.4699 31.8 57.1579 31.064C55.8459 30.328 54.8059 29.312 54.0379 28.016C53.2699 26.704 52.8859 25.224 52.8859 23.576C52.8859 21.944 53.2699 20.48 54.0379 19.184C54.8059 17.872 55.8459 16.848 57.1579 16.112C58.4699 15.376 59.9099 15.008 61.4779 15.008C63.0619 15.008 64.5019 15.376 65.7979 16.112C67.1099 16.848 68.1419 17.872 68.8939 19.184C69.6619 20.48 70.0459 21.944 70.0459 23.576C70.0459 25.224 69.6619 26.704 68.8939 28.016C68.1419 29.312 67.1099 30.328 65.7979 31.064C64.4859 31.8 63.0459 32.168 61.4779 32.168ZM61.4779 29.168C62.4859 29.168 63.3739 28.944 64.1419 28.496C64.9099 28.032 65.5099 27.376 65.9419 26.528C66.3739 25.68 66.5899 24.696 66.5899 23.576C66.5899 22.456 66.3739 21.48 65.9419 20.648C65.5099 19.8 64.9099 19.152 64.1419 18.704C63.3739 18.256 62.4859 18.032 61.4779 18.032C60.4699 18.032 59.5739 18.256 58.7899 18.704C58.0219 19.152 57.4219 19.8 56.9899 20.648C56.5579 21.48 56.3419 22.456 56.3419 23.576C56.3419 24.696 56.5579 25.68 56.9899 26.528C57.4219 27.376 58.0219 28.032 58.7899 28.496C59.5739 28.944 60.4699 29.168 61.4779 29.168ZM78.5097 32.168C77.3417 32.168 76.2857 31.968 75.3417 31.568C74.4137 31.168 73.6777 30.592 73.1337 29.84C72.5897 29.088 72.3097 28.2 72.2937 27.176H75.8937C75.9417 27.864 76.1817 28.408 76.6137 28.808C77.0617 29.208 77.6697 29.408 78.4377 29.408C79.2217 29.408 79.8377 29.224 80.2857 28.856C80.7337 28.472 80.9577 27.976 80.9577 27.368C80.9577 26.872 80.8057 26.464 80.5017 26.144C80.1977 25.824 79.8137 25.576 79.3497 25.4C78.9017 25.208 78.2777 25 77.4777 24.776C76.3897 24.456 75.5017 24.144 74.8137 23.84C74.1417 23.52 73.5577 23.048 73.0617 22.424C72.5817 21.784 72.3417 20.936 72.3417 19.88C72.3417 18.888 72.5897 18.024 73.0857 17.288C73.5817 16.552 74.2777 15.992 75.1737 15.608C76.0697 15.208 77.0937 15.008 78.2457 15.008C79.9737 15.008 81.3737 15.432 82.4457 16.28C83.5337 17.112 84.1337 18.28 84.2457 19.784H80.5497C80.5177 19.208 80.2697 18.736 79.8057 18.368C79.3577 17.984 78.7577 17.792 78.0057 17.792C77.3497 17.792 76.8217 17.96 76.4217 18.296C76.0377 18.632 75.8457 19.12 75.8457 19.76C75.8457 20.208 75.9897 20.584 76.2777 20.888C76.5817 21.176 76.9497 21.416 77.3817 21.608C77.8297 21.784 78.4537 21.992 79.2537 22.232C80.3417 22.552 81.2297 22.872 81.9177 23.192C82.6057 23.512 83.1977 23.992 83.6937 24.632C84.1897 25.272 84.4377 26.112 84.4377 27.152C84.4377 28.048 84.2057 28.88 83.7417 29.648C83.2777 30.416 82.5977 31.032 81.7017 31.496C80.8057 31.944 79.7417 32.168 78.5097 32.168ZM105.795 15.248V32H102.435V21.104L97.9467 32H95.4027L90.8907 21.104V32H87.5307V15.248H91.3467L96.6747 27.704L102.003 15.248H105.795ZM117.073 32.168C115.505 32.168 114.065 31.8 112.753 31.064C111.441 30.328 110.401 29.312 109.633 28.016C108.865 26.704 108.481 25.224 108.481 23.576C108.481 21.944 108.865 20.48 109.633 19.184C110.401 17.872 111.441 16.848 112.753 16.112C114.065 15.376 115.505 15.008 117.073 15.008C118.657 15.008 120.097 15.376 121.393 16.112C122.705 16.848 123.737 17.872 124.489 19.184C125.257 20.48 125.641 21.944 125.641 23.576C125.641 25.224 125.257 26.704 124.489 28.016C123.737 29.312 122.705 30.328 121.393 31.064C120.081 31.8 118.641 32.168 117.073 32.168ZM117.073 29.168C118.081 29.168 118.969 28.944 119.737 28.496C120.505 28.032 121.105 27.376 121.537 26.528C121.969 25.68 122.185 24.696 122.185 23.576C122.185 22.456 121.969 21.48 121.537 20.648C121.105 19.8 120.505 19.152 119.737 18.704C118.969 18.256 118.081 18.032 117.073 18.032C116.065 18.032 115.169 18.256 114.385 18.704C113.617 19.152 113.017 19.8 112.585 20.648C112.153 21.48 111.937 22.456 111.937 23.576C111.937 24.696 112.153 25.68 112.585 26.528C113.017 27.376 113.617 28.032 114.385 28.496C115.169 28.944 116.065 29.168 117.073 29.168ZM134.104 32.168C132.936 32.168 131.88 31.968 130.936 31.568C130.008 31.168 129.272 30.592 128.728 29.84C128.184 29.088 127.904 28.2 127.888 27.176H131.488C131.536 27.864 131.776 28.408 132.208 28.808C132.656 29.208 133.264 29.408 134.032 29.408C134.816 29.408 135.432 29.224 135.88 28.856C136.328 28.472 136.552 27.976 136.552 27.368C136.552 26.872 136.4 26.464 136.096 26.144C135.792 25.824 135.408 25.576 134.944 25.4C134.496 25.208 133.872 25 133.072 24.776C131.984 24.456 131.096 24.144 130.408 23.84C129.736 23.52 129.152 23.048 128.656 22.424C128.176 21.784 127.936 20.936 127.936 19.88C127.936 18.888 128.184 18.024 128.68 17.288C129.176 16.552 129.872 15.992 130.768 15.608C131.664 15.208 132.688 15.008 133.84 15.008C135.568 15.008 136.968 15.432 138.04 16.28C139.128 17.112 139.728 18.28 139.84 19.784H136.144C136.112 19.208 135.864 18.736 135.4 18.368C134.952 17.984 134.352 17.792 133.6 17.792C132.944 17.792 132.416 17.96 132.016 18.296C131.632 18.632 131.44 19.12 131.44 19.76C131.44 20.208 131.584 20.584 131.872 20.888C132.176 21.176 132.544 21.416 132.976 21.608C133.424 21.784 134.048 21.992 134.848 22.232C135.936 22.552 136.824 22.872 137.512 23.192C138.2 23.512 138.792 23.992 139.288 24.632C139.784 25.272 140.032 26.112 140.032 27.152C140.032 28.048 139.8 28.88 139.336 29.648C138.872 30.416 138.192 31.032 137.296 31.496C136.4 31.944 135.336 32.168 134.104 32.168ZM146.485 15.248V32H143.125V15.248H146.485ZM155.769 32.168C154.601 32.168 153.545 31.968 152.601 31.568C151.673 31.168 150.937 30.592 150.393 29.84C149.849 29.088 149.569 28.2 149.553 27.176H153.153C153.201 27.864 153.441 28.408 153.873 28.808C154.321 29.208 154.929 29.408 155.697 29.408C156.481 29.408 157.097 29.224 157.545 28.856C157.993 28.472 158.217 27.976 158.217 27.368C158.217 26.872 158.065 26.464 157.761 26.144C157.457 25.824 157.073 25.576 156.609 25.4C156.161 25.208 155.537 25 154.737 24.776C153.649 24.456 152.761 24.144 152.073 23.84C151.401 23.52 150.817 23.048 150.321 22.424C149.841 21.784 149.601 20.936 149.601 19.88C149.601 18.888 149.849 18.024 150.345 17.288C150.841 16.552 151.537 15.992 152.433 15.608C153.329 15.208 154.353 15.008 155.505 15.008C157.233 15.008 158.633 15.432 159.705 16.28C160.793 17.112 161.393 18.28 161.505 19.784H157.809C157.777 19.208 157.529 18.736 157.065 18.368C156.617 17.984 156.017 17.792 155.265 17.792C154.609 17.792 154.081 17.96 153.681 18.296C153.297 18.632 153.105 19.12 153.105 19.76C153.105 20.208 153.249 20.584 153.537 20.888C153.841 21.176 154.209 21.416 154.641 21.608C155.089 21.784 155.713 21.992 156.513 22.232C157.601 22.552 158.489 22.872 159.177 23.192C159.865 23.512 160.457 23.992 160.953 24.632C161.449 25.272 161.697 26.112 161.697 27.152C161.697 28.048 161.465 28.88 161.001 29.648C160.537 30.416 159.857 31.032 158.961 31.496C158.065 31.944 157.001 32.168 155.769 32.168Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3347_16138"
            x1="21.9482"
            y1="8.69013"
            x2="33.3617"
            y2="37.9178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FAE7FD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3347_16138"
            x1="28.0015"
            y1="38.0953"
            x2="28.0015"
            y2="9.90479"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FAE7FD" />
          </linearGradient>
          <radialGradient
            id="paint2_radial_3347_16138"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.7635 29.2957) rotate(1.73961) scale(33.8823 49.7097)"
          >
            <stop stopColor="#2D01E2" />
            <stop offset="0.602428" stopColor="#DD4AC8" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_3347_16138"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25.1232 8.99062) rotate(62.2299) scale(28.5431 61.2321)"
          >
            <stop offset="0.505088" stopColor="#DD4AC8" />
            <stop offset="0.917785" stopColor="#2D01E2" />
          </radialGradient>
          <linearGradient
            id="paint4_linear_3347_16138"
            x1="20.0546"
            y1="11.7593"
            x2="21.1912"
            y2="37.1706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint5_radial_3347_16138"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.3767 29.4622) rotate(1.73961) scale(33.8823 49.7097)"
          >
            <stop stopColor="#2D01E2" />
            <stop offset="0.602428" stopColor="#DD4AC8" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_3347_16138"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25.7365 9.15712) rotate(62.2299) scale(28.5431 61.2321)"
          >
            <stop offset="0.505088" stopColor="#DD4AC8" />
            <stop offset="0.917785" stopColor="#2D01E2" />
          </radialGradient>
          <linearGradient
            id="paint7_linear_3347_16138"
            x1="20.6679"
            y1="11.9258"
            x2="21.8044"
            y2="37.3371"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_3347_16138">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(12 8)"
            />
          </clipPath>
        </defs>
      </svg>
    }
  />
);
