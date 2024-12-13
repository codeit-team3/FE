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

export interface ClubStatus {
  isCompleted: boolean;
  isConfirmed: boolean;
}

export interface ClubMeeting extends BaseProps {
  meetingInfo: MeetingInfo;
  imageInfo: ImageInfo;
  clubStatus: ClubStatus;
  actions: SimpleActions;
}
