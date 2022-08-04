const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeOneReaction,
    removeAllReaction
} = require('../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(removeAllReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeOneReaction);

module.exports = router;