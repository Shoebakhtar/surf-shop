const express  = require('express');
const router   = express.Router({ mergeParams: true });
const { asyncErrorHandler, isReviewAuthor } = require('../middlewares');
const {
    reviewCreate,
    reviewUpdate,
    reviewDestroy
} = require('../controllers/reviews');


// POST create    /posts/:id/reviews
router.post("/", asyncErrorHandler(reviewCreate));

// PUT update     /posts/:id/reviews/:review_id
router.put("/:review_id", isReviewAuthor, asyncErrorHandler(reviewUpdate));

// DELETE destroy /posts/:id/reviews/:review_id
router.delete("/:review_id", isReviewAuthor, asyncErrorHandler(reviewDestroy));

module.exports  = router;