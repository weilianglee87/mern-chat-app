const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  addToGroup,
  removeFromGroup,
  deleteChat,
} = require("../controllers/chatControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroupChat);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/delete/:chatId").delete(protect, deleteChat); // added delete route

module.exports = router;
