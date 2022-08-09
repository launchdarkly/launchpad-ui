---
'@launchpad-ui/alert': patch
'@launchpad-ui/button': patch
'@launchpad-ui/clipboard': patch
'@launchpad-ui/dropdown': patch
'@launchpad-ui/filter': patch
'@launchpad-ui/lozenge': patch
'@launchpad-ui/menu': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/navigation': patch
'@launchpad-ui/notification': patch
'@launchpad-ui/overlay': patch
'@launchpad-ui/popover': patch
'@launchpad-ui/split-button': patch
'@launchpad-ui/tab-list': patch
'@launchpad-ui/toggle': patch
'@launchpad-ui/tooltip': patch
'@launchpad-ui/core': patch
---

Moved userEvent.setup calls above render as suggested in `testing-library` docs [here](https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent).

- [alert] Moved userEvent setup calls to above render
- [button] Moved userEvent setup calls to above render
- [clipboard] Moved userEvent setup calls to above render
- [dropdown] Moved userEvent setup calls to above render
- [filter] Moved userEvent setup calls to above render
- [lozenge] Moved userEvent setup calls to above render
- [menu] Moved userEvent setup calls to above render
- [modal] Moved userEvent setup calls to above render
- [navigation] Moved userEvent setup calls to above render
- [notification] Moved userEvent setup calls to above render
- [overlay] Moved userEvent setup calls to above render
- [popover] Moved userEvent setup calls to above render
- [split] Moved userEvent setup calls to above render
- [tab] Moved userEvent setup calls to above render
- [toggle] Moved userEvent setup calls to above render
- [tooltip] Moved userEvent setup calls to above render, update type of test fn to partial props type
- [core] Moved userEvent setup calls to above render
