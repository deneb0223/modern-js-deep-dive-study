const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    location: [32.18832, -103.23233],
};

const region = {
    city: 'Hobbs',
    country: 'Lea',
    state: {
        name: 'Suwon',
        code: 'SW'
    }
};

function getCityAndState( {location} ) {
    const { city, state } = determineCityAndState(location);
    return {
        city,
        state: state.code,
    };
}
// 도시, 주 명을 반환하는 함수를 지정한다
function determineCityAndState(location) {
    return {};
}