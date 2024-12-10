import { BaseProps } from './base';
import {
  MeetingInfo,
  ParticipationStatus,
  ImageInfo,
  HostInfo,
} from './meeting';
import { SimpleActions, FullActions } from './actions';

export interface Meeting extends BaseProps {
  meetingInfo: MeetingInfo;
  participationStatus: ParticipationStatus;
  imageInfo: ImageInfo;
  actions: SimpleActions;
}

export interface FullMeeting extends Omit<Meeting, 'actions'> {
  hostInfo: HostInfo;
  actions: FullActions;
}
