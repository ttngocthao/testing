import Feature from "../models/feature"
import AccessIconUrl from "../images/icon-access-anywhere.svg"
import SecurityIconUrl from "../images/icon-security.svg"
import CollaborationIconUrl from "../images/icon-collaboration.svg"
import AnyFileIconUrl from "../images/icon-any-file.svg"
export const FEATURES = [
  new Feature(
    "computer and devises icon means accessible anywhere",
    AccessIconUrl,
    "Access your files icon",
    "The ability to user a smartphone, tablet, or computer to access your    account means your files follow you everywhere."
  ),
  new Feature(
    "security icon mean its secured",
    SecurityIconUrl,
    "Security icon",
    "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
  ),
  new Feature(
    "collaboration icon",
    CollaborationIconUrl,
    "Real-time collaboration",
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
  ),
  new Feature(
    "any types of file icon",
    AnyFileIconUrl,
    "Store any type of file",
    " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
  ),
]
