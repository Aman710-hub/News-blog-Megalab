import React from "react";
import styled from "styled-components";

const Footre = () => {
  return (
    <Wrapper>
      <div className="inner_container">
        <p className="logo">
          <svg
            width="129"
            height="29"
            viewBox="0 0 129 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // style={" margin-top: 2.188rem;"}
          >
            <g clipPath="url(#clip0_1_117)">
              <path
                d="M23.6534 7.86758C22.7918 6.71992 21.4807 6.14612 19.7184 6.14612C18.3981 6.14612 17.3155 6.52001 16.4761 7.26969C15.6349 8.01752 15.0035 8.96156 14.5838 10.1C14.2625 8.96156 13.6869 8.01752 12.8568 7.26969C12.0248 6.52186 10.9496 6.14612 9.62931 6.14612C8.34612 6.14612 7.30062 6.48114 6.48911 7.14937C5.67761 7.8176 5.0518 8.71167 4.61169 9.82971V6.5052H0.043457V22.7649H4.63955V13.5133C4.63955 12.0751 4.86982 11.0236 5.33035 10.3554C5.79089 9.68718 6.49283 9.35214 7.43433 9.35214C8.37583 9.35214 9.07035 9.68718 9.5216 10.3554C9.97286 11.0236 10.1976 12.0565 10.1976 13.4541V22.7668H14.7936V13.5152C14.7936 12.0769 15.0239 11.0255 15.4844 10.3573C15.945 9.68903 16.6469 9.35399 17.5884 9.35399C18.5299 9.35399 19.2245 9.68903 19.6757 10.3573C20.127 11.0255 20.3517 12.0584 20.3517 13.4559V22.7686H24.9478V12.4638C24.944 10.5479 24.5151 9.01709 23.6534 7.86758Z"
                fill="white"
              />
              <path
                d="M42.814 20.9879C42.1436 19.6903 41.1872 18.6871 39.9449 17.9781C38.7044 17.2691 37.2523 16.9156 35.5902 16.9156C33.9691 16.9156 32.5262 17.2747 31.2634 17.9929C30.0025 18.7111 29.0257 19.7088 28.3368 20.9879C28.0359 21.5451 27.7982 22.1374 27.6311 22.765H32.2161C32.437 21.9931 32.7769 21.3859 33.2337 20.9435C33.8632 20.3345 34.6487 20.0291 35.5902 20.0291C36.5503 20.0291 37.3525 20.3586 37.9932 21.0175C38.4426 21.4803 38.7657 22.0634 38.9588 22.765H43.4899C43.3247 22.1374 43.1 21.5451 42.814 20.9879Z"
                fill="white"
              />
              <path
                d="M43.8205 6.38494C43.8205 4.68938 43.4843 3.19186 42.814 1.89427C42.4426 1.17605 41.982 0.548548 41.4361 0.0098877H29.7685C29.2003 0.550399 28.7249 1.17791 28.3367 1.89427C27.6459 3.1715 27.3005 4.6394 27.3005 6.29609C27.3005 7.95279 27.6404 9.42439 28.3219 10.7127C29.0016 11.9992 29.9672 13.0025 31.2188 13.7226C32.4704 14.4408 33.9282 14.798 35.5902 14.798C37.5716 14.798 39.2448 14.3612 40.606 13.4819C41.9672 12.6027 42.918 11.3162 43.4602 9.6206H38.8325C38.5336 10.3185 38.1325 10.8386 37.6311 11.1773C37.1297 11.5161 36.4593 11.6864 35.6199 11.6864C34.6394 11.6864 33.8261 11.3476 33.1854 10.6683C32.5447 9.99081 32.1455 8.99309 31.9839 7.67513H43.7276C43.7907 7.21237 43.8205 6.78477 43.8205 6.38494ZM32.0155 4.61719C32.1975 3.38068 32.6023 2.45699 33.2337 1.84799C33.8632 1.23899 34.6487 0.935422 35.5902 0.935422C36.5503 0.935422 37.3525 1.26306 37.9932 1.92204C38.6338 2.58102 39.0145 3.47878 39.1352 4.61719H32.0155Z"
                fill="white"
              />
              <path
                d="M84.7915 0.00802612V22.7632H89.3876V0.00802612H84.7915Z"
                fill="white"
              />
              <path
                d="M107.473 16.7324C106.91 15.7754 106.071 15.022 104.949 14.4722C103.826 13.9225 102.446 13.6485 100.805 13.6485C99.4229 13.6485 98.1861 13.8595 97.0942 14.2779C96.0023 14.6962 95.1221 15.3052 94.4517 16.103C93.7813 16.9027 93.3765 17.8523 93.2354 18.9481H97.8612C97.9596 18.3298 98.266 17.8097 98.7767 17.3913C99.2892 16.973 99.9651 16.762 100.805 16.762C101.746 16.762 102.465 17.0378 102.968 17.5857C103.467 18.1355 103.718 18.8389 103.718 19.6978V19.968L99.421 20.3864C97.4396 20.5659 95.8185 21.0157 94.5557 21.7321C94.0729 22.0061 93.6829 22.3504 93.3876 22.765H108.312V20.0254C108.312 18.7871 108.032 17.6912 107.473 16.7324Z"
                fill="white"
              />
              <path
                d="M108.309 0.00802612H103.716V0.126494L99.419 0.546684C97.4376 0.726234 95.8164 1.1742 94.5537 1.89241C93.2928 2.61062 92.6614 3.80826 92.6614 5.48533C92.6614 6.50342 92.9121 7.41599 93.4116 8.22491C93.913 9.03382 94.5982 9.66318 95.471 10.1111C96.342 10.5591 97.2983 10.7849 98.3382 10.7849C99.7607 10.7849 100.892 10.4851 101.733 9.88716C102.574 9.28742 103.256 8.44888 103.776 7.37157V10.4258H108.31V0.185727C108.312 0.128344 108.312 0.069111 108.309 0.00802612ZM103.718 3.51394C103.718 4.37283 103.582 5.14472 103.311 5.83332C103.042 6.52193 102.637 7.06059 102.095 7.44931C101.555 7.83803 100.903 8.03425 100.143 8.03425C99.6214 8.03425 99.1479 7.92874 98.7152 7.71957C98.2863 7.50854 97.9501 7.21422 97.7106 6.83476C97.4692 6.45714 97.3503 6.00733 97.3503 5.48903C97.3503 4.90964 97.5212 4.46168 97.861 4.14145C98.2008 3.82306 98.6298 3.59354 99.1516 3.45286C99.6734 3.31588 100.323 3.20296 101.105 3.12336L103.718 2.85496V3.51394Z"
                fill="white"
              />
              <path
                d="M62.7321 22.765C62.6838 24.1644 62.3013 25.325 61.5789 26.2376C60.8082 27.215 59.8166 27.9184 58.6058 28.3497C57.3932 28.7773 56.097 28.992 54.7173 28.992C53.3746 28.992 52.1342 28.7976 50.9921 28.4089C49.85 28.0202 48.8993 27.4204 48.1379 26.6115C47.3784 25.8026 46.9271 24.7993 46.7878 23.6017H51.4136C51.5752 24.3403 51.954 24.903 52.5557 25.2936C53.1574 25.6823 53.876 25.8766 54.7191 25.8766C55.7386 25.8766 56.5705 25.5971 57.2112 25.0381C57.811 24.5143 58.1304 23.7572 58.1694 22.7632H62.7321V22.765Z"
                fill="white"
              />
              <path
                d="M73.3969 22.765C72.7303 23.0057 71.9485 23.1241 71.0515 23.1241C70.2939 23.1241 69.5789 23.0057 68.9104 22.765H73.3969Z"
                fill="white"
              />
              <path
                d="M124.349 22.765C123.692 23.0057 122.984 23.1241 122.227 23.1241C121.499 23.1241 120.814 23.0057 120.175 22.765H124.349Z"
                fill="white"
              />
              <path
                d="M58.1695 6.50527V10.0982C57.7888 8.93942 57.1333 7.99167 56.2029 7.2531C55.2707 6.51638 54.1231 6.14432 52.7637 6.14432C51.4415 6.14432 50.2698 6.48861 49.2484 7.17721C48.2289 7.8658 47.436 8.83391 46.8752 10.0815C46.3143 11.3291 46.0339 12.7619 46.0339 14.3778C46.0339 15.9957 46.3143 17.4284 46.8752 18.676C47.436 19.9236 48.2271 20.8917 49.2484 21.5803C50.2698 22.2689 51.4415 22.6114 52.7637 22.6114C53.9838 22.6114 55.0757 22.2874 56.0358 21.6396C56.9977 20.9917 57.7071 20.1365 58.1695 19.0795V22.5521C58.1695 22.6225 58.1676 22.6928 58.1658 22.7632C58.1268 23.7572 57.8073 24.5161 57.2075 25.0381C56.5669 25.5971 55.7349 25.8767 54.7154 25.8767C53.8724 25.8767 53.1537 25.6823 52.552 25.2936C51.9504 24.903 51.5715 24.3403 51.41 23.6017H46.7842C46.9234 24.7993 47.3747 25.8026 48.1342 26.6115C48.8956 27.4204 49.8464 28.0183 50.9884 28.4089C52.1305 28.7976 53.371 28.992 54.7136 28.992C56.0933 28.992 57.3895 28.7773 58.6021 28.3497C59.8148 27.9202 60.8046 27.215 61.5752 26.2376C62.2957 25.325 62.6801 24.1644 62.7284 22.765C62.7302 22.6669 62.7321 22.5651 62.7321 22.4651V6.50527H58.1695ZM57.3598 18.154C56.6987 19.0518 55.7572 19.4997 54.5353 19.4997C53.293 19.4997 52.3478 19.0518 51.6978 18.154C51.046 17.2544 50.721 15.9975 50.721 14.3797C50.721 12.7637 51.046 11.5068 51.6978 10.6072C52.3478 9.70946 53.293 9.2615 54.5353 9.2615C55.7572 9.2615 56.6987 9.70946 57.3598 10.6072C58.019 11.5068 58.3496 12.7637 58.3496 14.3797C58.3496 15.9975 58.019 17.2544 57.3598 18.154Z"
                fill="white"
              />
              <path
                d="M80.1824 9.23182C79.6198 8.27297 78.7804 7.52143 77.6588 6.97167C76.5353 6.4219 75.1555 6.14612 73.5139 6.14612C72.1323 6.14612 70.8955 6.35711 69.8036 6.77546C68.7117 7.1938 67.8315 7.8028 67.1611 8.60246C66.4907 9.40212 66.0859 10.3499 65.9448 11.4475H70.5706C70.669 10.8293 70.9754 10.3091 71.4861 9.88894C71.9986 9.4706 72.6746 9.26143 73.5139 9.26143C74.4554 9.26143 75.1741 9.53539 75.6773 10.0852C76.1769 10.6349 76.4276 11.3383 76.4276 12.1972V12.4638L72.1304 12.8821C70.149 13.0635 68.5279 13.5115 67.2651 14.2297C66.0042 14.9479 65.3728 16.1455 65.3728 17.8226C65.3728 18.8388 65.6235 19.7533 66.123 20.5622C66.6244 21.3711 67.3097 22.0005 68.1825 22.4484C68.4183 22.5687 68.6616 22.6761 68.9085 22.7631C69.5771 23.0037 70.2902 23.1222 71.0497 23.1222C71.9485 23.1222 72.7284 23.0037 73.3951 22.7631C73.7832 22.6261 74.1323 22.4447 74.4424 22.2226C75.2855 21.6247 75.9652 20.7862 76.4851 19.7088V22.7631H81.0199V12.523C81.0236 11.2865 80.7432 10.1888 80.1824 9.23182ZM76.4276 15.8475C76.4276 16.7064 76.292 17.4802 76.0209 18.1688C75.7516 18.8555 75.3468 19.396 74.8045 19.7847C74.2641 20.1735 73.6123 20.3678 72.8528 20.3678C72.331 20.3678 71.8575 20.2642 71.4248 20.055C70.9958 19.844 70.6597 19.5496 70.4201 19.1702C70.1787 18.7926 70.0599 18.3428 70.0599 17.8245C70.0599 17.2451 70.2307 16.7971 70.5706 16.4769C70.9104 16.1585 71.3412 15.9271 71.8612 15.7883C72.383 15.6495 73.0348 15.5384 73.8148 15.4588L76.4276 15.1904V15.8475Z"
                fill="white"
              />
              <path
                d="M128.115 10.2944C127.555 9.00605 126.763 7.99352 125.74 7.2531C124.721 6.51637 123.549 6.1443 122.227 6.1443C121.306 6.1443 120.483 6.32571 119.764 6.68482C119.044 7.04393 118.437 7.52891 117.946 8.13791C117.454 8.74691 117.079 9.42069 116.819 10.1574V0.00802612H112.255V22.7632H116.819V19.4997C117.257 20.5771 117.965 21.4508 118.936 22.119C119.328 22.3874 119.742 22.604 120.173 22.7632C120.812 23.0038 121.497 23.1223 122.225 23.1223C122.981 23.1223 123.69 23.0038 124.347 22.7632C124.84 22.5836 125.302 22.3411 125.738 22.0301C126.76 21.3027 127.553 20.292 128.113 19.0055C128.674 17.7172 128.955 16.2641 128.955 14.6481C128.955 13.0321 128.676 11.5809 128.115 10.2944ZM117.633 18.5872C116.971 17.6394 116.641 16.327 116.641 14.6481C116.641 12.9729 116.971 11.6531 117.633 10.6961C118.294 9.73723 119.233 9.2578 120.455 9.2578C121.677 9.2578 122.619 9.73723 123.28 10.6961C123.941 11.6531 124.271 12.971 124.271 14.6481C124.271 16.3252 123.941 17.6394 123.28 18.5872C122.619 19.5349 121.677 20.0088 120.455 20.0088C119.233 20.0088 118.294 19.5349 117.633 18.5872Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_117">
                <rect width="129" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
        <div className="navigate_links">
          <a href="">Мой профиль</a>
          <span className="for_spacing"></span>
          <a href="">Избранные новости</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footre;

const Wrapper = styled.section`
  width: 100%;
  height: 12rem;
  max-width: 90rem;
  margin-inline: auto;
  background-color: #151515;

  .logo {
    width: 100%;
    text-align: center;
    padding-top: 2.188rem;
  }

  .navigate_links {
    width: 100%;
    text-align: center;
    margin-top: 2.813rem;
  }

  .for_spacing {
    margin-inline: 13px;
  }

  @media (max-width: 580px) {
    height: 9.375rem;

    .navigate_links {
      margin-top: 1.875rem;
    }
  }
`;