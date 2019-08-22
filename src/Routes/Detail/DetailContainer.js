import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        result : null,
        error: null,
        loading: false
    }

    render() {
        const { movieResults, result, error, loading } = this.state;
        return (
            <DetailPresenter
                movieResults={movieResults}
                result={result}
                error={error}
                loading={loading}
            />);
    }
}