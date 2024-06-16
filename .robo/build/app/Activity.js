import { useEffect, useState } from "react";
import { useDiscordSdk } from "../hooks/useDiscordSdk.js";
export const Activity = ()=>{
    const { authenticated, discordSdk, status } = useDiscordSdk();
    const [channelName, setChannelName] = useState();
    useEffect(()=>{
        // Requesting the channel in GDMs (when the guild ID is null) requires
        // the dm_channels.read scope which requires Discord approval.
        if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
            return;
        }
        // Collect channel info over RPC
        // Enable authentication to see it! (App.tsx)
        discordSdk.commands.getChannel({
            channel_id: discordSdk.channelId
        }).then((channel)=>{
            if (channel.name) {
                setChannelName(channel.name);
            }
        });
    }, [
        authenticated,
        discordSdk
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "m-0 flex min-h-screen min-w-80 flex-col place-items-center justify-center bg-white text-black dark:bg-black dark:text-white"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/rocket.png",
        className: "my-4 h-24 duration-300 hover:drop-shadow-[0_0_2em_#646cff]",
        alt: "Discord"
    }), /*#__PURE__*/ React.createElement("h1", {
        className: "my-4 text-5xl font-bold"
    }, "Hello, World"), /*#__PURE__*/ React.createElement("h3", {
        className: "my-4 font-bold"
    }, channelName ? `#${channelName}` : status), /*#__PURE__*/ React.createElement("small", {
        className: "my-4"
    }, "Powered by ", /*#__PURE__*/ React.createElement("strong", null, "Robo.js")));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJ1aGEvRG93bmxvYWRzL3N0YXJ0ZXItcmVhY3QtdHMtdGFpbHdpbmQvc3JjL2FwcC9BY3Rpdml0eS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzY29yZFNkayB9IGZyb20gJy4uL2hvb2tzL3VzZURpc2NvcmRTZGsnXG5cbmV4cG9ydCBjb25zdCBBY3Rpdml0eSA9ICgpID0+IHtcblx0Y29uc3QgeyBhdXRoZW50aWNhdGVkLCBkaXNjb3JkU2RrLCBzdGF0dXMgfSA9IHVzZURpc2NvcmRTZGsoKVxuXHRjb25zdCBbY2hhbm5lbE5hbWUsIHNldENoYW5uZWxOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gUmVxdWVzdGluZyB0aGUgY2hhbm5lbCBpbiBHRE1zICh3aGVuIHRoZSBndWlsZCBJRCBpcyBudWxsKSByZXF1aXJlc1xuXHRcdC8vIHRoZSBkbV9jaGFubmVscy5yZWFkIHNjb3BlIHdoaWNoIHJlcXVpcmVzIERpc2NvcmQgYXBwcm92YWwuXG5cdFx0aWYgKCFhdXRoZW50aWNhdGVkIHx8ICFkaXNjb3JkU2RrLmNoYW5uZWxJZCB8fCAhZGlzY29yZFNkay5ndWlsZElkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHQvLyBDb2xsZWN0IGNoYW5uZWwgaW5mbyBvdmVyIFJQQ1xuXHRcdC8vIEVuYWJsZSBhdXRoZW50aWNhdGlvbiB0byBzZWUgaXQhIChBcHAudHN4KVxuXHRcdGRpc2NvcmRTZGsuY29tbWFuZHMuZ2V0Q2hhbm5lbCh7IGNoYW5uZWxfaWQ6IGRpc2NvcmRTZGsuY2hhbm5lbElkIH0pLnRoZW4oKGNoYW5uZWwpID0+IHtcblx0XHRcdGlmIChjaGFubmVsLm5hbWUpIHtcblx0XHRcdFx0c2V0Q2hhbm5lbE5hbWUoY2hhbm5lbC5uYW1lKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sIFthdXRoZW50aWNhdGVkLCBkaXNjb3JkU2RrXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibS0wIGZsZXggbWluLWgtc2NyZWVuIG1pbi13LTgwIGZsZXgtY29sIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZSB0ZXh0LWJsYWNrIGRhcms6YmctYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG5cdFx0XHQ8aW1nIHNyYz1cIi9yb2NrZXQucG5nXCIgY2xhc3NOYW1lPVwibXktNCBoLTI0IGR1cmF0aW9uLTMwMCBob3Zlcjpkcm9wLXNoYWRvdy1bMF8wXzJlbV8jNjQ2Y2ZmXVwiIGFsdD1cIkRpc2NvcmRcIiAvPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cIm15LTQgdGV4dC01eGwgZm9udC1ib2xkXCI+SGVsbG8sIFdvcmxkPC9oMT5cblx0XHRcdDxoMyBjbGFzc05hbWU9XCJteS00IGZvbnQtYm9sZFwiPntjaGFubmVsTmFtZSA/IGAjJHtjaGFubmVsTmFtZX1gIDogc3RhdHVzfTwvaDM+XG5cdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwibXktNFwiPlxuXHRcdFx0XHRQb3dlcmVkIGJ5IDxzdHJvbmc+Um9iby5qczwvc3Ryb25nPlxuXHRcdFx0PC9zbWFsbD5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzY29yZFNkayIsIkFjdGl2aXR5IiwiYXV0aGVudGljYXRlZCIsImRpc2NvcmRTZGsiLCJzdGF0dXMiLCJjaGFubmVsTmFtZSIsInNldENoYW5uZWxOYW1lIiwiY2hhbm5lbElkIiwiZ3VpbGRJZCIsImNvbW1hbmRzIiwiZ2V0Q2hhbm5lbCIsImNoYW5uZWxfaWQiLCJ0aGVuIiwiY2hhbm5lbCIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImgzIiwic21hbGwiLCJzdHJvbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBTztBQUMzQyxTQUFTQyxhQUFhLFFBQVEsNEJBQXdCO0FBRXRELE9BQU8sTUFBTUMsV0FBVztJQUN2QixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQUUsR0FBR0o7SUFDOUMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdQO0lBRXRDRCxVQUFVO1FBQ1Qsc0VBQXNFO1FBQ3RFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUNJLGlCQUFpQixDQUFDQyxXQUFXSSxTQUFTLElBQUksQ0FBQ0osV0FBV0ssT0FBTyxFQUFFO1lBQ25FO1FBQ0Q7UUFFQSxnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDTCxXQUFXTSxRQUFRLENBQUNDLFVBQVUsQ0FBQztZQUFFQyxZQUFZUixXQUFXSSxTQUFTO1FBQUMsR0FBR0ssSUFBSSxDQUFDLENBQUNDO1lBQzFFLElBQUlBLFFBQVFDLElBQUksRUFBRTtnQkFDakJSLGVBQWVPLFFBQVFDLElBQUk7WUFDNUI7UUFDRDtJQUNELEdBQUc7UUFBQ1o7UUFBZUM7S0FBVztJQUU5QixxQkFDQyxvQkFBQ1k7UUFBSUMsV0FBVTtxQkFDZCxvQkFBQ0M7UUFBSUMsS0FBSTtRQUFjRixXQUFVO1FBQTZERyxLQUFJO3NCQUNsRyxvQkFBQ0M7UUFBR0osV0FBVTtPQUEwQiwrQkFDeEMsb0JBQUNLO1FBQUdMLFdBQVU7T0FBa0JYLGNBQWMsQ0FBQyxDQUFDLEVBQUVBLFlBQVksQ0FBQyxHQUFHRCx1QkFDbEUsb0JBQUNrQjtRQUFNTixXQUFVO09BQU8sNkJBQ1osb0JBQUNPLGdCQUFPO0FBSXZCLEVBQUMifQ==