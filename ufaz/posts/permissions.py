from rest_framework import permissions

# Create permission for admin
"""
If user is admin, user can remove, update, add or read data
"""
class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if(request.method in permissions.SAFE_METHODS):
            return True
        return bool(request.user and request.user.is_staff)

# Create permission for user
"""
If user is the user which was created this post, user can remove, update, add or read data
"""
class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if(request.method in permissions.SAFE_METHODS):
            return True
        return obj.user == request.user