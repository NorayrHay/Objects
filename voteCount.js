"use strict";

const getVoteCount = function (obj) {
  let { upvotes: w, downvotes: h } = obj;
  return w - h;
};

getVoteCount({ upvotes: 13, downvotes: 0 });
getVoteCount({ upvotes: 2, downvotes: 33 });
getVoteCount({ upvotes: 132, downvotes: 132 });
