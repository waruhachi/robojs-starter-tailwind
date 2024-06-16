import { DiscordContextProvider } from "../hooks/useDiscordSdk.js";
import { Activity } from "./Activity.js";
import "./App.css";
/**
 * 🔒 Set `authenticate` to true to enable Discord authentication
 * You can also set the `scope` prop to request additional permissions
 *
 * Example:
 * ```tsx
 * <DiscordContextProvider authenticate scope={['identify', 'guilds']}>
 * ```
 */ export default function App() {
    return /*#__PURE__*/ React.createElement(DiscordContextProvider, {
        authenticate: true
    }, /*#__PURE__*/ React.createElement(Activity, null));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJ1aGEvRG93bmxvYWRzL3N0YXJ0ZXItcmVhY3QtdHMtdGFpbHdpbmQvc3JjL2FwcC9BcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc2NvcmRDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9ob29rcy91c2VEaXNjb3JkU2RrJ1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tICcuL0FjdGl2aXR5J1xuaW1wb3J0ICcuL0FwcC5jc3MnXG5cbi8qKlxuICog8J+UkiBTZXQgYGF1dGhlbnRpY2F0ZWAgdG8gdHJ1ZSB0byBlbmFibGUgRGlzY29yZCBhdXRoZW50aWNhdGlvblxuICogWW91IGNhbiBhbHNvIHNldCB0aGUgYHNjb3BlYCBwcm9wIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBwZXJtaXNzaW9uc1xuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0c3hcbiAqIDxEaXNjb3JkQ29udGV4dFByb3ZpZGVyIGF1dGhlbnRpY2F0ZSBzY29wZT17WydpZGVudGlmeScsICdndWlsZHMnXX0+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEaXNjb3JkQ29udGV4dFByb3ZpZGVyIGF1dGhlbnRpY2F0ZT5cblx0XHRcdDxBY3Rpdml0eSAvPlxuXHRcdDwvRGlzY29yZENvbnRleHRQcm92aWRlcj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkRpc2NvcmRDb250ZXh0UHJvdmlkZXIiLCJBY3Rpdml0eSIsIkFwcCIsImF1dGhlbnRpY2F0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLHNCQUFzQixRQUFRLDRCQUF3QjtBQUMvRCxTQUFTQyxRQUFRLFFBQVEsZ0JBQVk7QUFDckMsT0FBTyxZQUFXO0FBRWxCOzs7Ozs7OztDQVFDLEdBQ0QsZUFBZSxTQUFTQztJQUN2QixxQkFDQyxvQkFBQ0Y7UUFBdUJHLGNBQUFBO3FCQUN2QixvQkFBQ0Y7QUFHSiJ9