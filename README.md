# ⛺️ CAMPEE

## 🔗 주소

<br>

<a href="https://campee.store" target="_blank">https://campee.store</a>

<br>
<br>

## 🔖 기획 의도

<br>

최근 취미로 두고 관심을 가지는 사람이 많은 것을 바탕으로 키워드를 캠핑으로 선택하였습니다.

**Campee**는 Camp, Exciting, Enjoy를 혼합하여 이름을 정하였고, 각종 커뮤니티와 중고거래 사이트가 많아지고 있지만 온전히 캠핑만을 위한 정보를 원하는 사용자들에게 커뮤니티, 중고거래를 동시에 제공할 수 있는 서비스를 만들어 보고 싶어 개발하게 된 웹 반응형 서비스입니다.

<br>
<br>

## ⭐️ 기술 스택

<br>

|    기술    |  버전   | 선정 이유                                                                                                                                                                                                                                                                                            |
| :--------: | :-----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   React    | 17.0.2  | React는 컴포넌트 단위로 구성할 수 있어 가독성이 매우 높고 간단하여 쉬운 유지 보수, 간편한 UI 수정 및 재사용성이 용이합니다. <br>또한 렌더링 시 Virtual DOM을 활용함으로써 실제 DOM과 비교하여 변경된 부분만 렌더링해주며 리소스를 최소화할 수 있기에 선택하였습니다.                                 |
|  Next.js   | 12.1.0  | Next.js는 서버 사이드 렌더링을 지원하여 사용자에게 초기 로딩속도를 제공하며, 검색 엔진 최적화를 향상시킵니다. <br> 기본적인 파일 기반 라우팅을 제공하여 개발자가 페이지 간의 이동을 쉽게 구성할 수 있습니다. 이러한 라우팅 방식으로 인해 코드 구조를 간소화하고 유지 관리에 용이하여 선택하였습니다. |
| TypeScript |  5.0.4  | TypeScript는 변수, 함수, 객체 등에게 명시적인 타입을 명시하여 컴파일중에 발생하는 타입 오류를 발견해주고 실시간으로 직관적인 타입 에러를 보여주어 사전에 에러를 방지를 할 수 있기에 안정적인 코드 작성을 위해 선택하였습니다.                                                                        |
|  GraphQL   | 16.6.0  | GraphQL은 클라이언트에서 서버측으로 불필요한 데이터는 제외하여 원하는 데이터만 받아올 수 있고 한번의 요청으로 여러 API의 정보를 가져올 수 있어 Overfetching과 Underfetching 방지를 할 수 있어 선택하였습니다.                                                                                        |
|   Recoil   |  0.7.7  | 특정 페이지에서만 요구되는 데이터가 아닌 로그인시 반환되는 accessToken과 같이 전역적으로 상태 관리가 필요한 데이터 관리와 React의 상태 관리 방식과 비슷한 방법으로 접근성이 용이하여 선택하였습니다.                                                                                                 |
|  Emotion   | 11.10.6 | 고유한 클래스명을 부여하여 클래스명에 대한 매핑을 효율적으로 처리하며, props로 인한 동적 스타일링이 가능하여 선택하였습니다.                                                                                                                                                                         |

<br>
<br>

## ⚙️ 주요 기능

<br>

### 회원가입 / 로그인

![회원가입](https://github.com/chlgusrb97/Campee/assets/119344662/7df36023-8e17-40dd-a41a-f042e8e19720)
![로그인](https://github.com/chlgusrb97/Campee/assets/119344662/bc68148d-d9fe-44e6-b2c9-2312c5ba88de)

- 로그인 시 반환되는 accessToken으로 회원인 사용자만 이용할 수 있도록 마이페이지와 상품에 관련된 페이지는 권한 분기 처리가 되어있습니다.
- yup을 이용한 유효성 검증을 합니다.

<br>

### 결제 (충전 / 구매)

![결제](https://github.com/chlgusrb97/Campee/assets/119344662/3814cf1f-b39c-482c-a94a-70276f92a933)

![상품구매](https://github.com/chlgusrb97/Campee/assets/119344662/b7ffd172-727c-4307-83ca-e07242ccfb8b)

- 아임포트 API를 이용한 카카오 금액 충전 기능으로 상품을 구매할 수 있습니다.

<br>

### 커뮤니티 / 중고거래

<br>

#### - 게시글 리스트 (Pagination)

![게시글리스트](https://github.com/chlgusrb97/Campee/assets/119344662/0ab92398-5538-40df-99d9-a27f8aefa521)

#### - 상품 리스트 (Infinite scrolling)

![상품리스트-min](https://github.com/chlgusrb97/Campee/assets/119344662/6a447a62-a976-4b32-905f-d6a715da4808)

- 검색을 통해 특정 키워드와 관련된 정보를 볼 수 있습니다.

<br>

#### - 등록 / 수정

![상품등록](https://github.com/chlgusrb97/Campee/assets/119344662/95210416-fa79-4643-b43f-644ae9f42095)

- Ant Design의 Upload 컴포넌트를 활용한 첨부파일 업로드 기능과 React-Quill로 웹 에디터를 적용하였습니다.
- 주소 검색 기능을 사용할 수 있으며, 선택한 주소를 카카오 맵에 위치를 표시하는 기능도 함께 제공됩니다.
- yup을 이용한 유효성 검증을 합니다.

<br>

#### - 상세페이지

![상품디테일](https://github.com/chlgusrb97/Campee/assets/119344662/b01be7fe-dd81-4f65-9dfb-742dc6e25d87)

- 댓글 작성이 가능하며 수정, 삭제는 작성자에 따른 분기 처리가 되어있습니다.

<br>

### 마이페이지

![마이페이지](https://github.com/chlgusrb97/Campee/assets/119344662/6588d52d-de61-461c-b201-52cf103ba19d)

- 판매 상품, 위시리스트, 거래내역을 확인할 수 있습니다.
- 프로필과 비밀번호 수정이 가능합니다.

<br>

### 반응형 구현

![모바일](https://github.com/chlgusrb97/Campee/assets/119344662/630116db-f673-45c7-b0dd-c62d58813304)

<br>
<br>

## ⚡️ 위기 및 극복

<br>

이미지 업로드 기능을 구현하기 위해 Ant Design의 Upload 컴포넌트를 사용했습니다. 해당 라이브러리에서 반환하는 여러 데이터 중에서 이미지의 URL만 추출하여 등록했습니다.

게시글이나 상품 수정 시에 서버에서 데이터를 Fetch 할 때 불러오는 데이터 형식과 라이브러리의 데이터 형식이 달라 기존에 업로드한 이미지를 수정 시에 문제가 발생하였고 이를 해결하기 위해 라이브러리에서 반환하는 데이터의 형식과 서버가 필요로 하는 형식을 맞추기 위해 데이터 조작 작업을 수행해야 하는 과정이 복잡하고 어려움이 있었습니다.

```javascript
// 상품 등록 Hooks

export const useCreateUsedItem = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]); // 이미지 배열

  const [createUseditem] = useMutationCreateUsedItem();
  const [uploadFile] = useMutationUploadFile();
  const {pageRouting} = routes();

  const createUsedItemSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const tags = data.tags?.toString().split(" ").filter(Boolean);
    const files = fileList.map((file) => file.originFileObj); // 파일 url 추출

    try {
      const fileResult = await Promise.all(
        files.map((file) => uploadFile({variables: {file}})) // 파일 업로드 처리
      );
      const images = fileResult
        .map((file) => file.data?.uploadFile.url)
        .filter((url): url is string => Boolean(url)); // 이미지 URL 배열 생성

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            images,
            useditemAddress: {
              zipcode: data.useditemAddress?.zipcode,
              address: data.useditemAddress?.address,
              addressDetail: data.useditemAddress?.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk: () =>
          pageRouting(
            `${PRODUCTS_DETAIL_PATH}/${result.data?.createUseditem._id}`
          ),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({content: "상품 등록에 실패했습니다."});
    }
  };

  return {createUsedItemSubmit, fileList, setFileList};
};
```

파일 선택 시 fileList 배열에 추가되는 객체들을 map() 메서드를 활용하여 배열 내의 각각의 요소들의 originFileObj로 접근해 url을 추출한 후 uploadFile 이름의 Mutation으로 파일 업로드를 한 뒤 images라는 이미지 url만 담는 배열을 생성하여 데이터를 전송하도록 하였습니다.

<br>

```JSX
<ImageUploadItem
  fileList={fileList}
  setFileList={setFileList}
  dataImages={props.data?.fetchUseditem.images}
/>
```

```javascript
useEffect(() => {
    if (props.dataImages) {
      const newFileList = props.dataImages.map((image, index) => ({
        uid: String(index),
        name: image,
        status: "done" as UploadFileStatus,
        url: `https:storage.googleapis.com/${image}`,
      }));
      props.setFileList(newFileList);
    }
  }, [props.dataImages]);
```

등록 후 기존 이미지가 화면 상에 나타나도록 하기 위해 업로드를 관리하는 ImageUploadItem 컴포넌트에 해당 게시글의 url 데이터 배열을 dataImages 이름으로 props를 전달해 준 뒤 라이브러리 형식에 반드시 필요한 데이터로 변환하고 setFileList에 담았습니다. 또한 useEffect를 통해 dataImages가 변경될 때만 렌더링이 되도록 했습니다.

<br>

```javascript
for (let i = 0; i < props.fileList.length; i++) {
        if (props.fileList[i].originFileObj) {
          const file = props.fileList[i].originFileObj;
          const NewFileResult = await uploadFile({variables: {file}});

          props.fileList[i] = {
            uid: String(i),
            name: String(NewFileResult.data?.uploadFile.url),
            status: "done" as UploadFileStatus,
            url: NewFileResult.data?.uploadFile.url,
          };
        }
      }
```

수정 Hooks 함수에서 이전에 변환한 데이터에는 originFileObj 요소가 없고 새로 추가하는 이미지에는 있기 때문에 반복문을 통해 배열을 순회하여 해당 데이터에 originFileObj 요소가 있다면 디폴트 데이터와 동일하게 바꿔준 후 등록했을 때처럼 url만 담는 배열을 생성하여 데이터를 전송했습니다.

<br>
<br>

## 😲 회고

CAMPEE를 기획하고 개발하면서 수많은 에러를 경험하고 중간에 막히기도, 많은 어려움도 있었지만 다양한 코드들을 적용해 보면서 해결해나가며 어떤 점이 문제가 있었는지에 대해 파악할 수 있는 기회가 많았고 많은 라이브러리를 경험하며 해당 환경에 맞게 코드를 작성해야 하는 것에서 데이터의 흐름이나 적용하는 방법에 대해 많이 배울 수 있었습니다.

State와 useEffect를 활용하여 조건부 렌더링으로 DOM 렌더링 최소화에 신경을 썼으며, 공용 컴포넌트를 만들어 React의 장점인 코드 재사용성을 많이 활용할 수 있었습니다. 이를 통해 각 컴포넌트에서 전달하는 각기 다른 props의 타입들로 인해 타입스크립트에 대한 이해도를 높일 수 있었습니다.

한편으로는 공용 컴포넌트에 너무 신경을 쓰다 보니 카카오 맵을 렌더링 할 때 등록, 상세페이지, 수정 기능을 하나의 컴포넌트에서 처리하려고 시도했습니다. 그러나 이로 인해 맵 렌더링이 5초 이상 걸리는 현상이 발생했습니다. 렌더링 시간을 개선하기 위해 각 섹션 별로 기능을 컴포넌트를 분기하여 1초 이하로 렌더링 되도록 해결하였습니다. 이번 프로젝트처럼 계속 생각하고 또 생각하면 결국 해결된다는 자신감이 생겼고 지속적인 리팩토링과 코드 개선을 고려하며 경험을 쌓는 것이 중요하다는 것을 느꼈습니다.
