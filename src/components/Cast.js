import { connect } from "react-redux";
import "../styles/Cast.scss";
import HorizontalScroll from "react-horizontal-scrolling";
import imgnotfound from "../images/imgnotfound.png";
import { imgRender } from "./Helper";

const Cast = (props) => {
  const selectedMovieCredits = props.selectedMovieCredits;

  const render = () => {
    return selectedMovieCredits?.cast.slice(0, 12).map((castMember) => {
      return (
        <div className="CastMembers">
          <img src={imgRender(castMember.profile_path)} />
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
