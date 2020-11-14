import select from 'select-dom';

import './refined-github.css';
import './features/github-bugs.css';
import './features/scrollable-code-and-blockquote.css';
import './features/center-reactions-popup.css';
import './features/clean-dashboard.css';
import './features/safer-destructive-actions.css';
import './features/clean-mergeability-box.css';
import './features/clean-footer.css';
import './features/pr-approvals-count.css';
import './features/hide-tips.css';
import './features/hide-readme-header.css';
import './features/hide-obvious-tooltips.css';
import './features/clean-conversations.css';
import './features/sticky-conversation-list-toolbar.css';
import './features/always-show-branch-delete-buttons.css';
import './features/easier-pr-sha-copy.css';
import './features/repo-stats-spacing.css';
import './features/emphasize-draft-pr-label.css';
import './features/clean-notifications.css';
import './features/clean-pinned-issues.css';
import './features/fix-first-tab-length.css';
import './features/align-repository-header.css';
import './features/show-pr-image-upload.css';

// DO NOT add CSS files here if they are part of a JavaScript feature.
// Import the `.css` file from the `.tsx` instead.

import './features/useful-not-found-page';
import './features/trending-menu-item';
import './features/hide-useless-newsfeed-events';
import './features/align-issue-labels';
import './features/more-dropdown';
import './features/releases-tab';
import './features/remove-projects-tab';
import './features/comment-fields-keyboard-shortcuts';
import './features/one-key-formatting';
import './features/tab-to-indent';
import './features/hide-navigation-hover-highlight';
import './features/monospace-textareas';
import './features/selection-in-new-tab';
import './features/hide-comments-faster';
import './features/edit-comments-faster';
import './features/open-all-notifications';
import './features/copy-on-y';
import './features/profile-hotkey';
import './features/close-out-of-view-modals';
import './features/improve-shortcut-help';
import './features/deprioritize-marketplace-link';
import './features/view-markdown-source';
import './features/copy-file';
import './features/hide-own-stars';
import './features/infinite-scroll';
import './features/hide-empty-meta';
import './features/shorten-links';
import './features/linkify-code';
import './features/download-folder-button';
import './features/linkify-branch-references';
import './features/batch-open-conversations';
import './features/hide-useless-comments';
import './features/navigate-pages-with-arrow-keys';
import './features/conversation-links-on-repo-lists';
import './features/global-conversation-list-filters';
import './features/conversation-filters';
import './features/sort-conversations-by-update-time'; // Must be after global-conversation-list-filters and conversation-filters and conversation-links-on-repo-lists
import './features/pinned-issues-update-time';
import './features/latest-tag-button';
import './features/default-branch-button';
import './features/faster-pr-diff-options';
import './features/ci-link';
import './features/sort-milestones-by-closest-due-date';
import './features/star-repo-hotkey';
import './features/toggle-files-button';
import './features/sync-pr-commit-title';
import './features/open-ci-details-in-new-tab';
import './features/wait-for-build';
import './features/hide-inactive-deployments';
import './features/pull-request-hotkey';
import './features/quick-review-buttons';
import './features/format-conversation-titles';
import './features/embed-gist-inline';
import './features/comments-time-machine-links';
import './features/hide-issue-list-autocomplete';
import './features/esc-to-deselect-line';
import './features/recently-pushed-branches-enhancements';
import './features/create-release-shortcut';
import './features/patch-diff-links';
import './features/parse-backticks';
import './features/mark-merge-commits-in-list';
import './features/swap-branches-on-compare';
import './features/reactions-avatars';
import './features/show-names';
import './features/remove-diff-signs';
import './features/previous-next-commit-buttons';
import './features/preserve-whitespace-option-in-nav';
import './features/extend-diff-expander';
import './features/profile-gists-link';
import './features/show-user-top-repositories';
import './features/set-default-repositories-type-to-sources';
import './features/user-profile-follower-badge';
import './features/highlight-non-default-base-branch';
import './features/mark-private-orgs';
import './features/linkify-commit-sha';
import './features/bypass-checks';
import './features/warning-for-disallow-edits';
import './features/warn-pr-from-master';
import './features/split-issue-pr-search-results';
import './features/preview-hidden-comments';
import './features/fit-textareas';
import './features/collapsible-content-button';
import './features/hide-watch-and-fork-count';
import './features/resolve-conflicts';
import './features/follow-file-renames';
import './features/enable-file-links-in-compare-view'; // Must be before raw-file-link
import './features/raw-file-link';
import './features/tags-dropdown';
import './features/pr-filters';
import './features/edit-files-faster';
import './features/update-pr-from-base-branch';
import './features/hide-disabled-milestone-sorter';
import './features/tag-changelog-link';
import './features/link-to-file-in-file-history';
import './features/clean-sidebar';
import './features/sticky-sidebar';
import './features/release-download-count';
import './features/open-issue-to-latest-comment';
import './features/toggle-everything-with-alt';
import './features/suggest-commit-title-limit';
import './features/highest-rated-comment';
import './features/clean-conversation-filters';
import './features/minimize-upload-bar';
import './features/cycle-lists-with-keyboard-shortcuts';
import './features/tags-on-commits-list';
import './features/forked-to';
import './features/submit-review-as-single-comment';
import './features/edit-readme';
import './features/list-prs-for-file';
import './features/pr-branch-auto-delete';
import './features/linkify-symbolic-links'; // Must be before show-whitespace
import './features/show-whitespace';
import './features/hide-zero-packages';
import './features/restore-file';
import './features/hidden-review-comments-indicator';
import './features/reload-failed-proxied-images';
import './features/clean-rich-text-editor';
import './features/highlight-collaborators-and-own-conversations';
import './features/embed-gist-via-iframe';
import './features/expand-all-collapsed-code';
import './features/separate-draft-pr-button';
import './features/link-to-prior-blame-line';
import './features/dim-bots';
import './features/conflict-marker';
import './features/html-preview-link';
import './features/linkify-labels-on-dashboard';
import './features/linkify-user-location';
import './features/repo-age';
import './features/user-local-time';
import './features/quick-mention';
import './features/extend-conversation-status-filters';
import './features/expand-all-hidden-comments';
import './features/bugs-tab';
import './features/cross-deleted-pr-branches';
import './features/repo-wide-file-finder';
import './features/preserve-file-finder-term';
import './features/file-finder-buffer';
import './features/pr-commit-lines-changed';
import './features/show-open-prs-of-forks';
import './features/clone-branch';
import './features/deep-reblame';
import './features/clear-pr-merge-commit-message';
import './features/go-to-action-from-file';
import './features/action-used-by-link';
import './features/batch-mark-files-as-viewed';
import './features/unwrap-useless-dropdowns';
import './features/linkify-notification-repository-header';
import './features/stop-redirecting-in-notification-bar';
import './features/prevent-pr-commit-link-loss';
import './features/first-published-tag-for-merged-pr';
import './features/show-associated-branch-prs-on-fork';
import './features/faster-reviews';
import './features/fork-source-link-same-view';
import './features/pr-jump-to-first-non-viewed-file';
import './features/keyboard-navigation';
import './features/vertical-front-matter';
import './features/use-first-commit-message-for-new-prs';
import './features/linkify-user-edit-history-popup';
import './features/cleanup-repo-filelist-actions';
import './features/prevent-duplicate-pr-submission';
import './features/remove-label-faster';
import './features/clean-conversation-headers';
import './features/stop-pjax-loading-with-esc';
import './features/highlight-deleted-and-added-files-in-diffs';
import './features/convert-release-to-draft';
import './features/linkify-full-profile-readme-title';
import './features/same-page-definition-jump';
import './features/new-repo-disable-projects-and-wikis';
import './features/table-input';
import './features/link-to-github-io';
import './features/next-scheduled-github-action';
import './features/convert-pr-to-draft-improvements';
import './features/git-checkout-pr';
import './features/unfinished-comments';
import './features/single-diff-column-selection';
import './features/jump-to-change-requested-comment';

// Add global for easier debugging
(window as any).select = select;
