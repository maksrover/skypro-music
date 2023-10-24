// export const getIsLiked = ({track, user}) => {
//     if (!track.stared_user) {
//         return true;
//     }
//     return track.stared_user.find((staredUser) => user.email === staredUser.email)
// }


export const getIsLiked = ({ track, user }) => {
    if (!track) {
      return false;
    }

    if (!track?.stared_user) {
      return true;
    }

    return track.stared_user.find((staredUser) => user.email === staredUser.email);

  }

