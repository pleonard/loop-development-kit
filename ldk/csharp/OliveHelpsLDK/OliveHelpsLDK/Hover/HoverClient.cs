using System;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using OliveHelpsLDK.Logging;
using Proto;

namespace OliveHelpsLDK.Hover
{
    internal class HoverClient : BaseClient<Proto.Hover.HoverClient>, IHoverService
    {
        internal HoverClient(ChannelBase channelBase, Session session, ILogger logger) : base(
            new Proto.Hover.HoverClient(channelBase), session, logger, "hover")
        {
        }

        public Task<string> Query(HoverRequest request, CancellationToken cancellationToken = default)
        {
            var msg = new Proto.HoverReadRequest
            {
                Session = CreateSession(),
                XFromCenter = checked((uint) request.XFromCenter),
                YFromCenter = checked((uint) request.YFromCenter),
            };
            Func<Task<HoverReadResponse>, string> continuationFunction = task => task.Result.Text;
            return Client.HoverReadAsync(msg, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(LoggedParser(continuationFunction), cancellationToken);
        }

        public IStreamingCall<string> Stream(HoverRequest request, CancellationToken cancellationToken = default)
        {
            var msg = new Proto.HoverReadStreamRequest
            {
                Session = CreateSession(),
                XFromCenter = checked((uint) request.XFromCenter),
                YFromCenter = checked((uint) request.YFromCenter),
            };
            var call = Client.HoverReadStream(msg, CreateOptions(cancellationToken));
            return new StreamingCall<Proto.HoverReadStreamResponse, string>(call,
                LoggedParser<Proto.HoverReadStreamResponse, string>(response => response.Text));
        }
    }
}