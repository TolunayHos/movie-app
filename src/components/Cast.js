import { connect } from "react-redux";
import "../styles/Cast.scss";
import HorizontalScroll from "react-horizontal-scrolling";
import imgnotfound from "../images/imgnotfound.png";

const Cast = (props) => {
  const selectedMovieCredits = props.selectedMovieCredits;

  const imgRender = (castMember) => {
    return castMember.profile_path
      ? `https://image.tmdb.org/t/p/original/${castMember.profile_path}`
      : imgnotfound;
  };

  const render = () => {
    return selectedMovieCredits?.cast.slice(0, 12).map((castMember) => {
      return (
        <div className="CastMembers">
          <img src={imgRender(castMember)} />
          <p> {castMember.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="CastMain">
      <HorizontalScroll>{render()}</HorizontalScroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovieCredits: state.selectedMovieCredits,
  };
};

export default connect(mapStateToProps)(Cast);
