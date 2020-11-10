package ldk

import (
	"context"

	"github.com/open-olive/loop-development-kit/ldk/go/proto"
)

// StorageClient is used by the controller plugin to facilitate plugin initiated communication with the host
type StorageClient struct {
	client  proto.StorageClient
	session *Session
}

// StorageDelete is used by plugins to delete a storage entry
func (s *StorageClient) StorageDelete(ctx context.Context, key string) error {
	_, err := s.client.StorageDelete(ctx, &proto.StorageDeleteRequest{
		Key:     key,
		Session: s.session.ToProto(),
	})
	return err
}

// StorageDeleteAll is used by plugins to delete all storage entries
func (s *StorageClient) StorageDeleteAll(ctx context.Context) error {
	_, err := s.client.StorageDeleteAll(ctx, &proto.StorageDeleteAllRequest{
		Session: s.session.ToProto(),
	})
	return err
}

// StorageHasKey is used by plugins to check if a key exists in storage
func (s *StorageClient) StorageHasKey(ctx context.Context, key string) (bool, error) {
	resp, err := s.client.StorageHasKey(ctx, &proto.StorageHasKeyRequest{
		Key:     key,
		Session: s.session.ToProto(),
	})
	if err != nil {
		return false, err
	}

	return resp.HasKey, nil
}

// StorageKeys is used by plugins to get a list of keys for all entries
func (s *StorageClient) StorageKeys(ctx context.Context) ([]string, error) {
	resp, err := s.client.StorageKeys(ctx, &proto.StorageKeysRequest{
		Session: s.session.ToProto(),
	})
	if err != nil {
		return nil, err
	}

	return resp.Keys, nil
}

// StorageRead is used by plugins to get the value of an entry
func (s *StorageClient) StorageRead(ctx context.Context, key string) (string, error) {
	resp, err := s.client.StorageRead(ctx, &proto.StorageReadRequest{
		Key:     key,
		Session: s.session.ToProto(),
	})
	if err != nil {
		return "", err
	}

	return resp.Value, nil
}

// StorageReadAll is used by plugins to get a map of all entries
func (s *StorageClient) StorageReadAll(ctx context.Context) (map[string]string, error) {
	resp, err := s.client.StorageReadAll(ctx, &proto.StorageReadAllRequest{
		Session: s.session.ToProto(),
	})
	if err != nil {
		return nil, err
	}

	entries := make(map[string]string, len(resp.Entries))
	for respKey, respValue := range resp.Entries {
		entries[respKey] = respValue
	}

	return entries, nil
}

// StorageWrite is used by plugins to set an entry
func (s *StorageClient) StorageWrite(ctx context.Context, key, value string) error {
	_, err := s.client.StorageWrite(ctx, &proto.StorageWriteRequest{
		Key:     key,
		Value:   value,
		Session: s.session.ToProto(),
	})
	return err
}