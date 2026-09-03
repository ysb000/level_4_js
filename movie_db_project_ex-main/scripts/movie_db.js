//영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤이메리, 폭풍의 언덕
// DB.js - 영화 데이터베이스
const moviesDB = [
    {
        id: 1,
        title: '어벤져스: 둠스데이',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        genre: ['액션', 'SF', '히어로'],
        director: '앤서니 루소, 조 루소',
        rating: 9.2,
        cast: ['로버트 다우니 주니어', '페드로 파스칼', '크리스 헴스워스', '톰 홀랜드', '안소니 마키'],
        summary: '다중 우주의 붕괴를 막고 거대한 위협인 닥터 둠에 맞서기 위해 지구와 평행 세계의 히어로들이 다시 결집하여 펼치는 최후의 전쟁.'
    },
    {
        id: 2,
        title: '스파이더맨: 브랜드 뉴 데이',
        date: '2026-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '데스틴 대니얼 크레턴',
        rating: 8.9,
        cast: ['톰 홀랜드', '젠데이아', '제이콥 배덜런'],
        summary: '모든 기억을 잃은 세상 속에서 완전한 친절한 이웃 스파이더맨으로 홀로서기를 시작한 피터 파커가 뉴욕의 새로운 위협에 맞서는 이야기.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-05-15',
        poster: 'poster/poster_theodyssey.jpg',
        genre: ['드라마', '역사', '서사'],
        director: '우베르토 파솔리니',
        rating: 8.7,
        cast: ['랄프 파인즈', '줄리엣 비노쉬', '찰리 플러머'],
        summary: '20년간의 기나긴 트로이 전쟁과 방랑을 마치고 고향 이타카로 돌아온 영웅 오디세우스가 왕국과 가족을 되찾기 위해 펼치는 치열한 귀환의 여정.'
    },
    {
        id: 4,
        title: '토이스토리 5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        genre: ['애니메이션', '모험', '코미디', '가족'],
        director: '앤드루 스탠턴',
        rating: 9.0,
        cast: ['톰 행크스', '팀 알렌', '조안 쿠삭', '토니 헤일'],
        summary: '스마트폰과 태블릿 등 최첨단 전자기기에 마음을 빼앗긴 요즘 아이들 틈에서, 장난감 본연의 가치와 아이와의 유대를 지키기 위해 펼쳐지는 장난감 친구들의 새로운 모험.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다 2',
        date: '2026-09-18',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        genre: ['코미디', '드라마'],
        director: '데이비드 프랭클',
        rating: 8.5,
        cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트'],
        summary: '전통 인쇄 패션 매거진의 위기 속에서 패션계 거물로 성장한 에밀리와 그녀의 광고 집행 능력이 절실해진 미란다 프리슬리의 팽팽한 재회와 비즈니스 대결.'
    },
    {
        id: 6,
        title: '마이클',
        date: '2025-10-03',
        poster: 'poster/poster_michael.jpg',
        genre: ['전기', '드라마', '음악'],
        director: '안톤 후쿠아',
        rating: 9.3,
        cast: ['자파르 잭슨', '콜맨 도밍고', '니아 롱', '마일즈 텔러'],
        summary: '팝의 황제 마이클 잭슨의 잭슨 파이브 시절부터 글로벌 슈퍼스타가 되기까지의 전설적인 음악 인생과 인간적인 고뇌를 담아낸 전기 영화.'
    },
    {
        id: 7,
        title: '슈퍼 마리오 갤럭시',
        date: '2026-04-03',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        genre: ['애니메이션', '모험', 'SF', '코미디'],
        director: '아론 호바스, 마이클 옐레닉',
        rating: 8.8,
        cast: ['크리스 프랫', '찰리 데이', '안야 테일러조이', '잭 블랙'],
        summary: '우주를 정복하려는 쿠파의 야욕에 맞서, 별의 요정 치코와 천문대의 수호자 로젤리나와 함께 은하계를 가로지르며 펼쳐지는 마리오 형제의 대모험.'
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        genre: ['SF', '드라마', '모험'],
        director: '필 로드, 크리스토퍼 밀러',
        rating: 9.5,
        cast: ['라이언 고슬링', '산드라 휠러', '밀라나 바인트루브'],
        summary: '태양 에너지를 갉아먹는 미지의 물질로 인해 멸망 위기에 처한 인류를 구하기 위해, 기억을 잃은 채 머나먼 우주선에서 깨어난 중학교 과학 교사의 처절하고 감동적인 우주 생존기.'
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-11-20',
        poster: 'poster/poster_wutheringheights.jpg',
        genre: ['로맨스', '드라마', '시대극'],
        director: '에머럴드 펜넬',
        rating: 8.6,
        cast: ['마고 로비', '제이콥 엘로디'],
        summary: '요크셔의 황량한 언덕 워더링 하이츠를 배경으로, 계급의 벽과 엇갈린 운명 속에서 증오와 복수로 뒤틀려버린 히스클리프와 캐서린의 파멸적인 사랑 이야기.'
    }
];
