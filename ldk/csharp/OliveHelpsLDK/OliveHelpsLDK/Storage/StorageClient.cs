using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using OliveHelpsLDK.Logging;

namespace OliveHelpsLDK.Storage
{
    internal class StorageClient : BaseClient<Proto.Storage.StorageClient>, IStorageService
    {
        internal StorageClient(ChannelBase channelBase, Session session, ILogger logger) : base(
            new Proto.Storage.StorageClient(channelBase), session, logger, "storage")
        {
        }

        public Task<bool> HasKey(string key, CancellationToken cancellationToken = default)
        {
            var req = new Proto.StorageExistsRequest
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.StorageExistsAsync(req, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(LoggedParser<Task<Proto.StorageExistsResponse>, bool>(task => task.Result.Exists),
                    cancellationToken);
        }

        public Task<string> Read(string key, CancellationToken cancellationToken = default)
        {
            var req = new Proto.StorageReadRequest()
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.StorageReadAsync(req, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(LoggedParser<Task<Proto.StorageReadResponse>, string>(task => task.Result.Value),
                    cancellationToken);
        }

        public Task Delete(string key, CancellationToken cancellationToken = default)
        {
            var req = new Proto.StorageDeleteRequest()
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.StorageDeleteAsync(req, CreateOptions(cancellationToken)).ResponseAsync;
        }

        public Task Write(string key, string value, CancellationToken cancellationToken = default)
        {
            var req = new Proto.StorageWriteRequest()
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.StorageWriteAsync(req, CreateOptions(cancellationToken)).ResponseAsync;
        }
    }
}