import {useEffect, useState} from "react";
import {Maybe} from "yup";
import {Map} from "../kakaoMap.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapFetchProps {
  address: string | Maybe<string>;
}

export default function KakaoMapFetch(props: IKakaoMapFetchProps) {
  const [lat] = useState(null);
  const [lng] = useState(null);

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KAKAOMAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다.
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        // 마커를 생성합니다.
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다.
        marker.setMap(map);

        if (props.address) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(
            props.address,
            function (result: any, status: any) {
              // 정상적으로 검색이 완료됐으면
              if (status === "OK") {
                marker.setMap(null);
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                // 결과값으로 받은 위치를 마커로 표시합니다
                new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              }
            }
          );
        }
      });
    };
  }, [props.address]);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
}
